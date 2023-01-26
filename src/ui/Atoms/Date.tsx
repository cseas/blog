import { format, parseISO } from "date-fns";

interface DateProps {
  dateString: string;
}

export function Date({ dateString }: DateProps) {
  const date = parseISO(dateString);
  return (
    <time className="text-slate-11" dateTime={dateString}>
      {format(date, "LLLL dd, yyyy")}
    </time>
  );
}
