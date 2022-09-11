const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
   if(arrayItems === null ||arrayItems === undefined){
     return undefined
   }else if(rowsPerPage === null||rowsPerPage===undefined||rowsPerPage===0){
     return 1
   } else {let answer = Math.ceil(arrayItems.length/rowsPerPage)
   
   return answer }

}
module.exports = totalPages
