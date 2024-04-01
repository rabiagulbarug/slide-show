import './sing-stamp.css'
export const SingStamp = () => {
    return (
        <div className='card'>
            <div className='tab-images'>
                <div className="animation-container">
                    <img src="/assets/images/screen-2.svg" className="phone-image animate-slide-in" alt=""/>
                    <img src="/assets/images/screen-2-1.svg" className="sign animate-decorative delay-wait-phone" alt=""/>
                    <img src="/assets/images/screen-2-2.svg" className="stamp animate-decorative delay-wait-sign" alt=""/>
                </div>
            </div>
            <div className='description'>
                <span className='tab-title'>
                    SING & STAMP
                </span>
                <span className='tab-head'>
                    One-Tap Focus
                </span>
                <span className='tab-explain'>
                    Draw, scan or import your signature and stamp with a simple touch.
                    Sign and stamp any document with just a single tap!
                </span>
                <button className='tab-button'>
                    Learn More
                </button>
            </div>
        </div>
    )
}
