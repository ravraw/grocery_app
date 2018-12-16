import React, { Component } from "react";
import Department from "./Department";

class Departments extends Component {
  constructor() {
    super();
    this.state = {
      //should use fetched Cart data from database; now uses hardcoded cartProducts
      departments: [
        {
          id: 1,
          departmentName: "meat",
          image:
            "https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/317/7eec43fd-6aca-489a-8070-08c18b12c4b1.png"
        },
        {
          id: 2,
          departmentName: "deli",
          image:
            "https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/317/7eec43fd-6aca-489a-8070-08c18b12c4b1.png"
        }
      ]
    };
  }
  render() {
    const departments = this.state.departments.map(department => {
      return <Department department={department} />;
    });

    return <React.Fragment>{departments}</React.Fragment>;
  }
}

export default Departments;
