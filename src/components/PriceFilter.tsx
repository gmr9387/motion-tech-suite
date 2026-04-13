import { Slider } from "@/components/ui/slider";

interface PriceFilterProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export const PriceFilter = ({ min, max, value, onChange }: PriceFilterProps) => {
  return (
    <div>
      <h3 className="font-semibold mb-3">Price Range</h3>
      <Slider
        min={min}
        max={max}
        step={5}
        value={value}
        onValueChange={(v) => onChange(v as [number, number])}
        className="mb-2"
      />
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </div>
  );
};
