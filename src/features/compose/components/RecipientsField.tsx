import { useRef, useState } from "react";
import { Upload } from "lucide-react";

interface RecipientsFieldProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const VISIBLE_CHIP_LIMIT = 3;

export function RecipientsField({ value, onChange }: RecipientsFieldProps) {
  const [input, setInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addRecipient = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    if (!value.includes(trimmed)) {
      onChange([...value, trimmed]);
    }
  };

  const commitInput = () => {
    if (!input.trim()) return;
    addRecipient(input);
    setInput("");
  };

  const removeRecipient = (recipient: string) => {
    onChange(value.filter((item) => item !== recipient));
  };

  const handleUploadList = (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    file.text().then((text) => {
      const parsed = text
        .split(/[\r\n,;]+/)
        .map((item) => item.trim())
        .filter(Boolean);
      const merged = Array.from(new Set([...value, ...parsed]));
      onChange(merged);
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const visibleChips = value.slice(0, VISIBLE_CHIP_LIMIT);
  const overflowCount = value.length - visibleChips.length;

  return (
    <div className="flex-1">
      <div className="flex flex-wrap items-center gap-2">
        {visibleChips.map((recipient) => (
          <span
            key={recipient}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#00A63E]/30 bg-[#EAF9EF] px-3 py-1.5 text-sm text-[#00A63E]"
          >
            {recipient}
            <button
              type="button"
              aria-label={`Remove ${recipient}`}
              onClick={() => removeRecipient(recipient)}
              className="text-[#00A63E]/70 hover:text-[#00A63E]"
            >
              ×
            </button>
          </span>
        ))}
        {overflowCount > 0 ? (
          <span className="inline-flex items-center rounded-full border border-[#00A63E]/30 bg-[#EAF9EF] px-3 py-1.5 text-sm text-[#00A63E]">
            +{overflowCount}
          </span>
        ) : null}
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === ",") {
              event.preventDefault();
              commitInput();
            }
          }}
          onBlur={commitInput}
          placeholder={value.length ? "" : "recipient@example.com"}
          className="min-w-[160px] flex-1 bg-transparent py-1.5 text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
        />
        <label className="ml-auto inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap text-sm font-medium text-[#00A63E]">
          <Upload className="h-4 w-4" />
          Upload List
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv,.txt"
            className="hidden"
            onChange={(event) => handleUploadList(event.target.files)}
          />
        </label>
      </div>
    </div>
  );
}
