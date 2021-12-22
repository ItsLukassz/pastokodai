import ajaxService from "./ajaxservice";

const searchCode = ()=>{

    document.querySelector("form").addEventListener("submit",(e)=>{
        e.preventDefault() //keiciama standartine formos elgsena
        const searchTerm = document.querySelector(`.term`).value;
        let searchResponce;
        ajaxService(searchTerm)
            .then(result =>searchResponce = result)
            .then(()=>console.log(searchResponce))
    })

}

export default searchCode