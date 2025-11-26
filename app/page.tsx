import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppBarChartMixed from "@/components/AppBarChartMixed";
import AppBarChartActive from "@/components/AppBarChartActive";
import AppBarChartInteractive from "@/components/AppBarChartInteractive";
import AppBarVerticalChart from "@/components/AppBarVerticalChart";
import AppPizzaChart from "@/components/AppPizzaChart";

const HomePage = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">

            <div className="bg-grid p-3 lg:p-4 rounded-lg lg:col-span-6">
                <AppBarChart />
            </div>
            <div className="bg-grid p-3 lg:p-4 rounded-lg lg:col-span-6">
                <AppBarChartActive />
            </div>

            <div className="bg-grid p-3 lg:p-4 rounded-lg lg:col-span-3">
                <AppPizzaChart />
            </div>
            <div className="bg-grid p-3 lg:p-4 rounded-lg lg:col-span-6">
                <AppAreaChart />
            </div>
            <div className="bg-grid p-3 lg:p-4 rounded-lg lg:col-span-3">
                <AppBarChartMixed />
            </div>

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