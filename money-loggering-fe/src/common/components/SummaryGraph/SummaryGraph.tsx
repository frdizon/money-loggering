import { FC, useMemo } from "react";
import { StyledPaper } from "./styles";
import { BarChart } from "@mui/x-charts";

interface TSummaryGraphProps {
  chartData: Record<string, number>[];
  categoriesList: string[];
}

const SummaryGraph: FC<TSummaryGraphProps> = ({
  chartData,
  categoriesList,
}) => {
  const categoriesSeries = useMemo(
    () =>
      categoriesList.map((categoryName) => ({
        dataKey: categoryName,
        label: categoryName,
        stack: "main",
      })),
    [categoriesList]
  );

  return (
    <StyledPaper>
      <BarChart
        dataset={chartData}
        series={categoriesSeries}
        xAxis={[
          {
            dataKey: "week",
            valueFormatter: (weekNum: number) => `Week ${weekNum}`,
          },
        ]}
        // yAxis={[{ width: 100 }]}
      />
    </StyledPaper>
  );
};

export default SummaryGraph;
