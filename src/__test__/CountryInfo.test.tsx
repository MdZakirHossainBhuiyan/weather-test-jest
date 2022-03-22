import CountryInfo from "../Components/CountryInfo/CountryInfo";
import { render } from "@testing-library/react";
import axios from "axios";

describe("country info page", () => {
    jest.spyOn(axios, "get").mockResolvedValue({
        data: {
          hits: [
            {
              flags:{
                  svg: "https://robmanuelfuckyeah.substack.com/p/someone-needs-to-stop-me-playing",
              },
              capital: "Dhaka",
              population: ,
              created_at_i: 1644667812,
              objectID: "30312182",
            },
          ],
        },
      });
})