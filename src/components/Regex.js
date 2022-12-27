export const unifyString = (v) => {
  return v.trim().toLowerCase();
};
//func for do not take into consideration the time
export function convertDate(d) {
  const D = new Date(d).toISOString().slice(0, 10);
  return D;
}
export const Validator = {
  stringVerif: (v_stringVerif) => {
    let regEx = /^[a-zA-Z ]*$/gm;
    return regEx.test(v_stringVerif);
  },

  zipCode: (v_zipCode) => {
    let regEx = /^\d{5}(?:[-\s]\d{4})?$/;
    if (!v_zipCode.match(regEx)) return false; // Invalid format
    if (v_zipCode.match(regEx)) return true;
  },
  validDateBirth: (d_Birth) => {
    //date submited into the form
    const date_to_valide = new Date(convertDate(d_Birth));

    //today date
    const start = new Date();

    //date of majority. for this exemple is 18
    //retun the date of previous day => day +1
    const majorDate = new Date(
      convertDate(
        new Date(
          `${start.getFullYear() - 18}-${start.getMonth() + 1}-${
            start.getDate() + 1
          }`
        )
      )
    );
    //comparing submited date of birh and date of majority
    return date_to_valide - majorDate <= 0 ? true : false;
  },
};
