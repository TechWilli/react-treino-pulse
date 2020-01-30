import React from 'react';
import axios from 'axios';
import moment from 'moment';

import Swal from 'sweetalert2';

export const generateHashCode = () => Math.random().toString(36).substr(2, 9);

export const getInputFormat = (inpuType = '', callback = () => { }) => {
    const callbackIn = callback;

    switch (inpuType.toLowerCase()) {
        case 'phone':
            return {
                mask: { mobile: '(11) 11111-1111', phone: '(11) 1111-1111' },
                doValidation: function (phone) {

                    const phoneNoMask = replaceSpecialChars(phone).replace(' ', '')

                    if (phoneNoMask.substr(2, 1) === "9") {
                        return /^\(\d{2}\) \d{5}-\d{4}$/.test(phone)
                    } else {
                        return /^\(\d{2}\) \d{4}-\d{4}$/.test(phone)
                    }

                },
                validation: function (inputState) {
                    let isValid = this.doValidation(inputState.value);
                    inputState.fieldIsValid = isValid;
                    callbackIn(inputState);
                    return isValid;
                },
                unmask: function (phone) {
                    return replaceSpecialChars(phone).replace(' ', '');
                },
            }
        case 'date':
            return {
                mask: '11/11/1111',
                doValidation: function (date) {
                    let dateToValidate = new Date(date);
                    return !isNaN(dateToValidate);
                },
                validation: function (inputState) {
                    let isValid = this.doValidation(inputState.value);
                    inputState.fieldIsValid = isValid;
                    callbackIn(inputState);
                    return isValid;
                },
                isMasked: function (date) {
                    return this.doValidation(date);
                },
                unmask: function (date) {
                    let dateToParse = new Date(date);
                    let parsedDate = moment(dateToParse).utc().format('YYYY-MM-DD');
                    return parsedDate;
                },
                applyMask: function (date) {
                    let dateToParse = new Date(date);
                    let parsedDate = moment(dateToParse).utc().format('DD/MM/YYYY');
                    return parsedDate;
                }
            }
        case 'datetime':
            return {
                mask: '11/11/1111 11:11:11',
                doValidation: function (date) {
                    let dateToValidate = new Date(date);
                    return !isNaN(dateToValidate);
                },
                validation: function (inputState) {
                    let isValid = this.doValidation(inputState.value);
                    inputState.fieldIsValid = isValid;
                    callbackIn(inputState);
                    return isValid;
                },
                isMasked: function (date) {
                    return this.doValidation(date);
                },
                unmask: function (date) {
                    let dateToParse = new Date(date);
                    let parsedDate = moment(dateToParse).utc().format('YYYY-MM-DD h:mm:ss');
                    return parsedDate;
                },
                applyMask: function (date) {
                    let dateToParse = new Date(date);
                    let parsedDate = moment(dateToParse).utc().format('DD/MM/YYYY h:mm:ss');
                    return parsedDate;
                }
            }
        case 'time':
            return {
                mask: '11:11',
                doValidation: function (date) {
                    return /^\d{2}:\d{2}$/.test(date)
                },
                validation: function (inputState) {
                    let isValid = this.doValidation(inputState.value);
                    inputState.fieldIsValid = isValid;
                    callbackIn(inputState);
                    return isValid;
                },
                isMasked: function (time) {
                    return this.doValidation(time);
                },
                unmask: function (time) {
                    return time;
                },
            }
        default:
            return {
                mask: '',
                doValidation: function (value) {
                    return true;
                },
                validation: function (inputState) {
                    callbackIn(inputState);
                    return true;
                },
                isMasked: function (value) {
                    return this.doValidation(value);
                },
                unmask: function (value) {
                    return value;
                },
            }
    }
}

export const arrayDistinct = (names) => names.filter((value, index) => names.indexOf(value) === index);

export async function makeRequest(url, method = 'get', data = {}, headers = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            headers: headers,
            data: data
        })
            .then((response) => {
                resolve(response.data);
            })
            .catch(async error => {
                    reject(error);
            });
    })

}

export const replaceSpecialChars = (str) => {
    if (typeof str === 'string') {
        str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
        str = str.replace(/[àáâãäå]/, "a");
        str = str.replace(/[ÈÉÊË]/, "E");
        str = str.replace(/[èéêë]/, "e");
        str = str.replace(/[ÌÍÎÏ]/, "I");
        str = str.replace(/[ìíîï]/, "i");
        str = str.replace(/[ÒÓÔÕÖ]/, "O");
        str = str.replace(/[òóôõö]/, "o");
        str = str.replace(/[ÙÚÛÜ]/, "U");
        str = str.replace(/[ùúûü]/, "u");
        str = str.replace(/[Ç]/, "C");
        str = str.replace(/[ç]/, "c");

        return str.replace(/[^a-z0-9]/gi, '');
    }
}

// onlyColumns - se o valor for "true" então a busca no "arr" será realizada apenas nas propriedades do objeto que forem iguais aos valores em "columns"
// exact - se o valor for "true" será realizada uma busca exatamente igual nos valores, diferenciando minúsculas e maiusculas, acentos e precisa da palavra completa
export const filterArrayOfObjects = (arr, searchKey, columns = ['id'], onlyColumns = false, exact = false) => {
    return arr.filter(obj => {
        return (
            Object.keys(obj).some(key => {
                let searchCondition;
                const searchIndex = (onlyColumns)
                    ? columns.indexOf(key) > -1
                    : columns.indexOf(key) === -1
                if (searchIndex) {
                    if (typeof replaceSpecialChars(obj[key]) !== 'undefined') {
                        searchCondition = (exact)
                            ? obj[key] === searchKey
                            : replaceSpecialChars(obj[key]).toLowerCase().includes(replaceSpecialChars(searchKey).toLowerCase())
                    }
                }
                return searchCondition
            })
        )
    })
}

export const isImage = fileName => {

    if (typeof fileName !== 'string') {
        return false;
    }

    const beginExtension = fileName.lastIndexOf('.');
    const extension = fileName.substr(beginExtension).toLocaleLowerCase();

    const isImage = extension === '.png' ||
        extension === '.jpeg' ||
        extension === '.jpg' ||
        extension === '.svg'

    return isImage;
}

export const getServerUrl = () => `http://standard.pulsecrm.cloud:8641/`;

export const getDefaultMaxFileSize = () => 500000;

export const getDefaultAllowedImgTypes = () => ['jpg', 'png', 'jpeg'];

export const rad2degr = (rad) => { return rad * 180 / Math.PI; }
export const degr2rad = (degr) => { return degr * Math.PI / 180; }

export const getLatLngCenter = (latLngInDegr) => {
    let sumX = 0;
    let sumY = 0;
    let sumZ = 0;

    for (let i = 0; i < latLngInDegr.length; i++) {
        let latDegr = degr2rad(latLngInDegr[i].lat);
        let lngDegr = degr2rad(latLngInDegr[i].lng);
        // sum of cartesian coordinates
        sumX += Math.cos(latDegr) * Math.cos(lngDegr);
        sumY += Math.cos(latDegr) * Math.sin(lngDegr);
        sumZ += Math.sin(latDegr);
    }

    let avgX = sumX / latLngInDegr.length;
    let avgY = sumY / latLngInDegr.length;
    let avgZ = sumZ / latLngInDegr.length;

    // convert average x, y, z coordinate to latitude and longtitude
    let longtitude = Math.atan2(avgY, avgX);
    let hyp = Math.sqrt(avgX * avgX + avgY * avgY);
    let latitude = Math.atan2(avgZ, hyp);

    return ({ lat: rad2degr(latitude), lng: rad2degr(longtitude) });
}

// Retorna um array de objetos únicos (removendo os objetos duplicados)
// Recebe no primeiro parâmetro um array de objetos
// O segundo parâmetro determina qual chave deve ser única desses objetos (default - id)
export const getDistinctArrayOfObjects = (arr, uniqueKey = "id") => {
    const distinctArrayOfObjects = Array.from(new Set(arr.map(object => object[uniqueKey])))
        .map(key => {
            return arr.find(obj => obj[uniqueKey] === key)
        })

    return distinctArrayOfObjects;
}

export const deviceIsSmartphone = () => window.innerWidth <= 576

export const deviceIsTablet = () => window.innerWidth > 576 && window.innerWidth <= 768

export const getFieldObject = (arr, key) => {
    for (let section of arr) {
        for (let obj of section.fields) {
            if (obj.dataField === key) {
                return obj;
            }
        }
    }
}

export const getArrayOfObjectsFromField = (arr, arrKey) => {
    let arrayObjects = [];
    for (let section of arr) {
        for (let obj of section.fields) {
            if (arrKey.some((key) => key === obj.dataField)) {
                arrayObjects = [...arrayObjects, obj];
            }
        }
    }

    return arrayObjects;
}

export const imageExistsInServer = imageUrl => {

    var req = new XMLHttpRequest();

    req.open('HEAD', getServerUrl() + imageUrl, false);
    req.send();
    return req.status !== 401;

}

export const alert = (type = 'success', title = 'Alerta', text = '') => {
    Swal.fire({
        type,
        title,
        text,

    })
}

export default {
    generateHashCode,
    getInputFormat,
    arrayDistinct,
    getServerUrl,
    makeRequest,
    replaceSpecialChars,
    filterArrayOfObjects,
    getDefaultMaxFileSize,
    getDefaultAllowedImgTypes,
    rad2degr,
    degr2rad,
    getLatLngCenter,
    getDistinctArrayOfObjects,
    getFieldObject,
    getArrayOfObjectsFromField,
    deviceIsSmartphone,
    deviceIsTablet,
    imageExistsInServer,
    isImage,
    alert
}