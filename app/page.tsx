import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppBarChartMixed from "@/components/AppBarChartMixed";
import AppPieChart from "@/components/AppPieChart";
import AppBarChartActive from "@/components/AppBarChartActive";
import AppBarChartInteractive from "@/components/AppBarChartInteractive";
import AppBarVerticalChart from "@/components/AppBarVerticalChart";

const HomePage = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">
            {/* Linha 1: dois cards grandes */}
            <div className="bg-grid p-3 lg:p-4 rounded-lg lg:col-span-6">
                <AppBarChart />
            </div>
            <div className="bg-grid p-3 lg:p-4 rounded-lg lg:col-span-6">
                <AppBarChartActive />
            </div>

            {/* Linha 2: card menor, card maior, card menor */}
            <div className="bg-grid p-3 lg:p-4 rounded-lg lg:col-span-3">
                <AppPieChart />
            </div>
            <div className="bg-grid p-3 lg:p-4 rounded-lg lg:col-span-6">
                <AppAreaChart />
            </div>
            <div className="bg-grid p-3 lg:p-4 rounded-lg lg:col-span-3">
                <AppBarChartMixed />
            </div>

            {/* Linha 3: dois cards grandes */}
            <div className="bg-grid p-3 lg:p-4 rounded-lg lg:col-span-6">
                <AppBarChartInteractive />
            </div>
            <div className="bg-grid p-3 lg:p-4 rounded-lg lg:col-span-6">
                <AppBarVerticalChart />
            </div>
        </div>
    );
};

export default HomePage