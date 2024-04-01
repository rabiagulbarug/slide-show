import './advanced-filters.css'
export const AdvancedFilters = () => {
    return (
        <div className='card'>
            <div className='tab-images'>
                <div className="animation-container">
                    <img src="/assets/images/screen-4.svg" className="phone-image animate-slide-in" alt=""/>
                    <img src="/assets/images/screen-4-1.png" className="left-slider animate-sliders" alt=""/>
                    <img src="/assets/images/screen-4-2.png" className="right-slider animate-sliders" alt=""/>
                </div>
            </div>
            <div className='description'>
                <span className='tab-title'>
                    ADVANCED FILTERS
                </span>
                <span className='tab-head'>
                    Unique Filters
                </span>
                <span className='tab-explain'>
                    Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.
                </span>
                <button className='tab-button'>
                    Learn More
                </button>
            </div>
        </div>
    )
}
