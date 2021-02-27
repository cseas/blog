import { format, parseISO } from "date-fns";
import styled from "styled-components";

interface DateProps {
  dateString: string;
}

export function Date({ dateString }: DateProps) {
  const date = parseISO(dateString);
  return <Time dateTime={dateString}>{format(date, "LLLL dd, yyyy")}</Time>;
}

const Time = styled.time`
  color: #666;
`;
