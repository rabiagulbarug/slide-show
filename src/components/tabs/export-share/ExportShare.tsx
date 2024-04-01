import './export-share.css'
export const ExportShare = () => {
    return (
        <div className='card'>
            <div className='tab-images'>
                <div className="animation-container">
                    <img src="/assets/images/screen-5.svg" className="phone-image animate-slide-in" alt=""/>
                    <img src="/assets/images/screen-5-1.svg" className="shortcut" alt=""/>
                    <img src="/assets/images/screen-5-2.svg" className="icon-1" alt=""/>
                    <img src="/assets/images/screen-5-3.svg" className="icon-2" alt=""/>
                    <img src="/assets/images/screen-5-4.svg" className="icon-3" alt=""/>
                </div>
            </div>
            <div className='description'>
                <span className='tab-title'>
                    EXPORT & SHARE
                </span>
                <span className='tab-head'>
                    All-Round Conversion
                </span>
                <span className='tab-explain'>
                    Export your scans as PDF,JPG,ZIP,TXT and Word.
                </span>
                <button className='tab-button'>
                    Learn More
                </button>
            </div>
        </div>
    )
}
