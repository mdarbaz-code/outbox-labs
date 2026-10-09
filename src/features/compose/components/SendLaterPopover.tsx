import { useState } from "react";
import { Calendar } from "lucide-react";

interface SendLaterPopoverProps {
  value?: string;
  onDone: (value: string) => void;
  onCancel: () => void;
  className?: string;
}

const presets = ["Tomorrow", "Tomorrow, 10:00 AM", "Tomorrow, 11:00 AM", "Tomorrow, 3:00 PM"];

export function SendLaterPopover({
  value,
  onDone,
  onCancel,
  className,
}: SendLaterPopoverProps) {
  const [selected, setSelected] = useState(value ?? "");

  return (
    <div
      className={`z-20 w-[280px] rounded-[16px] border border-[#E5E7EB] bg-white p-4 shadow-lg ${className ?? ""}`}
    >
      <p className="mb-3 text-base font-semibold text-[#111827]">Send Later</p>

      <div className="mb-3 flex items-center justify-between rounded-[10px] border border-[#E5E7EB] bg-white px-3 py-2">
        <input
          type="text"
          placeholder="Pick date & time"
          value={selected && !presets.includes(selected) ? selected : ""}
          onChange={(event) => setSelected(event.target.value)}
          className="w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
        />
        <Calendar className="h-4 w-4 shrink-0 text-[#6B7280]" />
      </div>

      <div className="mb-2">
        {presets.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => setSelected(preset)}
            className={`block w-full rounded-[8px] px-2 py-2 text-left text-sm ${
              selected === preset
                ? "bg-[#F4F7F5] font-medium text-[#111827]"
                : "text-[#111827] hover:bg-[#F4F7F5]"
            }`}
          >
            {preset}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-end gap-4 pt-1">
        <button
          type="button"
          onClick={onCancel}
          className="text-sm font-medium text-[#111827]"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => onDone(selected)}
          disabled={!selected}
          className="rounded-full border border-[#00A63E] px-5 py-1.5 text-sm font-medium text-[#00A63E] disabled:opacity-40"
        >
          Done
        </button>
      </div>
    </div>
  );
}
