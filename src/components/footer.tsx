export default function Footer() {
    return (
        <footer className="bg-gray-100 py-8 dark:bg-gray-800 mt-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="gird gird-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4 w-40">
                        <div className="flex items-center space-x-2">
                            <h1 className="font-bold">P31NN</h1>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Web dev & financial enthusiast pharmacy student</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}