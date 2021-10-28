import React from "react";
import {mount, configure } from "enzyme";
import { MemoryRouter as Router, Link } from "react-router-dom";
import Rol from "./rol.jsx";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Rol Component test cases", () => {
  it("simulate the click event on Button", () => {
    const wrapper = mount(
      <Router>
        <Rol />
      </Router>
    );
    
    expect(wrapper.find(Link)).toBeTruthy();
    expect(wrapper.find("Link").first().prop("to")).toEqual("/waiterOrder");
  });
});