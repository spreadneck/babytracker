import { createContext, useContext } from "react";

const labels = {
  metric: { volume: "mL", volumeStep: 5, weight: "kg", length: "cm", temp: "°C" },
  imperial: { volume: "oz", volumeStep: 0.5, weight: "lb", length: "in", temp: "°F" },
};

export const UnitContext = createContext("metric");

export function useUnits() {
  const system = useContext(UnitContext);
  return labels[system] || labels.metric;
}
