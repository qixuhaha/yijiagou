export const fetchDate = (uri)=>{
   return  fetch(uri)
    .then(response=>response.json())
    .then(res=>{
        return res;
    })

}