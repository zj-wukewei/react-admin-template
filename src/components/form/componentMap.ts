import React from "react";
import { Input, Select, Radio } from "antd";
import { ComponentType } from "./typing";


const componentMap = new Map<ComponentType, any>();

componentMap.set('Input', Input);
componentMap.set('Select', Select);


export function add(compName: ComponentType, component: React.Component) {
  componentMap.set(compName, component);
}

export function del(compName: ComponentType) {
  componentMap.delete(compName);
}

export { componentMap };