export function validateReqParams(req : any, params: string[]) {
    return req.validator(params);
}
export function isContains(jsonObj,key,value){
    var result = -1;
    jsonObj.forEach(function (data,index) {
        if(data[key] === value)
            result = index;
    });
    return result;
}