import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamic import supaya SSR aman
const GithubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });

const GITHUB_USERNAME = "muhamien";

type LayoutProps = {
    years: number[];
    selectedYear: number;
    setSelectedYear: (year: number) => void;
    githubUsername: string;
};

function YearButton({
    year,
    onClick,
    className = "",
}: {
    year: number;
    onClick: (year: number) => void;
    className?: string;
}) {
    return (
        <button
            key={year}
            onClick={() => onClick(year)}
            className={className}
        >
            {year}
        </button>
    );
}

function MobileLayout({ years, selectedYear, setSelectedYear, githubUsername }: LayoutProps) {
    return (
        <div className="block lg:hidden">
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Contributions on GitHub</h2>
                <div className="mb-4">
                    <div className="flex overflow-x-auto gap-2 pb-2">
                        {years.map((year) => (
                            <YearButton
                                key={year}
                                year={year}
                                onClick={setSelectedYear}
                                className={`flex-shrink-0 px-4 py-2 text-sm rounded-full transition-colors cursor-pointer ${
                                    selectedYear === year
                                        ? 'bg-blue-500 text-white font-medium'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <GithubCalendar
                    username={githubUsername}
                    year={selectedYear}
                    colorScheme="light"
                    blockRadius={3}
                    blockMargin={2}
                    blockSize={10}
                    fontSize={10}
                />
                <a
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-blue-600 hover:underline text-sm block text-center"
                >
                    View on GitHub
                </a>
            </div>
        </div>
    );
}

function TabletLayout({ years, selectedYear, setSelectedYear, githubUsername }: LayoutProps) {
    return (
        <div className="hidden lg:block xl:hidden">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">Contributions on GitHub</h2>
                <div className="mb-6 flex justify-center">
                    <div className="grid grid-cols-6 gap-2 max-w-md">
                        {years.map((year) => (
                            <YearButton
                                key={year}
                                year={year}
                                onClick={setSelectedYear}
                                className={`px-3 py-2 text-sm rounded transition-colors cursor-pointer ${
                                    selectedYear === year
                                        ? 'bg-blue-500 text-white font-medium'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <GithubCalendar
                    username={githubUsername}
                    year={selectedYear}
                    colorScheme="light"
                    blockRadius={4}
                    blockMargin={3}
                    blockSize={12}
                    fontSize={11}
                />
                <a
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-blue-600 hover:underline block text-center"
                >
                    View on GitHub
                </a>
            </div>
        </div>
    );
}

function DesktopLayout({ years, selectedYear, setSelectedYear, githubUsername }: LayoutProps) {
    return (
        <div className="hidden xl:block">
            <div className="flex gap-8">
                {/* Main Calendar Area */}
                <div className="flex flex-col">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Contributions on GitHub</h2>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm w-max">
                        <GithubCalendar
                            username={githubUsername}
                            year={selectedYear}
                            colorScheme="light"
                            blockRadius={4}
                            blockMargin={3}
                            blockSize={14}
                            fontSize={12}
                        />
                        <a
                            href={`https://github.com/${githubUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 text-blue-600 hover:underline"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
                {/* Year Filter Sidebar */}
                <div className="w-32 flex-shrink-0">
                    <div className="sticky top-4">
                        <div className="space-y-1">
                            {years.map((year) => (
                                <YearButton
                                    key={year}
                                    year={year}
                                    onClick={setSelectedYear}
                                    className={`w-full text-left px-3 py-2 text-sm rounded transition-colors cursor-pointer ${
                                        selectedYear === year
                                            ? 'bg-blue-500 text-white font-medium'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ContributionCalendar() {
    const [selectedYear, setSelectedYear] = useState<number>(2024);

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2018 }, (_, i) => 2019 + i).reverse();

    const layoutProps: LayoutProps = {
        years,
        selectedYear,
        setSelectedYear,
        githubUsername: GITHUB_USERNAME
    };

    return (
        <section className="w-full max-w-7xl mx-auto mt-12 mb-16 px-4 font-sans">
            <MobileLayout {...layoutProps} />
            <TabletLayout {...layoutProps} />
            <DesktopLayout {...layoutProps} />
        </section>
    );
}
