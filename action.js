export const saveIdentity=(identity)=>{
    return function (dispatch){
        dispatch({type:"save_identity",payloud:identity});
    };
};

export const saveHospitalizationNumber=(hospitalizationNumber)=>{
    return function (dispatch){
        dispatch({type:"save_hospitalizationNumber",payloud:hospitalizationNumber});
    };
};

export const saveMotherIdentity=(motherIdentity)=>{
    return function (dispatch){
        dispatch({type:"save_motherIdentity",payloud:motherIdentity});
    };
};

export const saveBirthDate=(birthDate)=>{
    return function (dispatch){
        dispatch({type:"save_birthDate",payloud:birthDate});
    };
};

export const saveBabyCare=(babyCare)=>{
    return function (dispatch){
        dispatch({type:"save_babyCare",payloud:babyCare});
    };
};

export const save_id_mongo=(id)=>{
    return function (dispatch){
        dispatch({type:"save_id_mongo",payloud:id});
    };
};