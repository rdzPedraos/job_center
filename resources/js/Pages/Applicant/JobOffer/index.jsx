import { Head } from '@inertiajs/react';

import BoxComponent from '@/Components/main/Box';
import { JobOfferFiltersProvider } from '@/Context/FilterContext';

import Filters from './partials/Filters';
import Search from './partials/Search';
import Jobs from './partials/Jobs';

export default function SearchJob() {
    return (
        <>
            <Head title="Bolsa de empleo" />

            <div
                className="
                    md:w-5/6 lg:w-4/5 mx-auto
                    grid lg:grid-cols-[2fr_5fr] grid-rows-[auto_1fr] gap-x-8 gap-y-5
                "
            >
                <JobOfferFiltersProvider>
                    <div className="row-span-2">
                        <BoxComponent>
                            <Filters />
                        </BoxComponent>
                    </div>

                    <BoxComponent className="py-5 px-7">
                        <Search />
                    </BoxComponent>

                    <div>
                        <BoxComponent className="py-7 px-7">
                            <Jobs />
                        </BoxComponent>
                    </div>
                </JobOfferFiltersProvider>
            </div>
        </>
    );
}
