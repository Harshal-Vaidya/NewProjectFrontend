import { API } from "../../backend";

//get all companies
export const getData = companyName => {
    return fetch(`${API}/getData/${companyName}`, {method: "GET"})
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  //get company by company code
export const getCompanyByCode = companyCode => {
    return fetch(`${API}/getCompany/${companyCode}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };  

    //get company by company name
  export const getStockByName = companyName => {
    return fetch(`${API}/findStock/${companyName}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };   
  //seven scores
  export const getSevenScores = companyName => {
    return fetch(`${API}/getSevenScores/${companyName}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  }; 

// getColor
export const getColor = score => {
    return fetch(`${API}/getColor/${score}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
}; 