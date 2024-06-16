import { GrCheckmark } from "react-icons/gr";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableRowsProps } from "@/types";
import { tableData } from "@/constants";

const TableRowItem = ({
  rowTitle,
  column1,
  column2,
  column3,
}: TableRowsProps) => (
  <TableRow>
    <TableCell className="table-heading">{rowTitle}</TableCell>
    <TableCell className="relative text-center">
      {column1 === true ? (
        <GrCheckmark className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      ) : (
        ""
      )}
    </TableCell>
    <TableCell className="relative text-center">
      {column2 === true ? (
        <GrCheckmark className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      ) : (
        ""
      )}
    </TableCell>
    <TableCell className="relative text-center">
      {column3 === true ? (
        <GrCheckmark className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      ) : (
        ""
      )}
    </TableCell>
  </TableRow>
);

const Comparison = () => {
  return (
    <section className="mx-auto w-4/5 max-w-7xl py-24">
      <h2 className="heading text-center text-black">Compare</h2>

      <Table className="mx-auto mt-16 w-[731px] max-md:w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="table-heading">The features</TableHead>
            <TableHead className="table-heading text-center">Basic</TableHead>
            <TableHead className="table-heading text-center">Pro</TableHead>
            <TableHead className="table-heading text-center">
              Business
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item) => (
            <TableRowItem key={item.rowTitle} {...item} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Comparison;
