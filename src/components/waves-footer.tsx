

export const FooterWaves = (): JSX.Element => {
    
    return(
        <div className="lg:col-start-1 lg:col-end-3 row-start-3 row-end-4 pt-4">
            <div>
                <svg className="waves relative lg:w-full h-15vh sm:h-20vh md:h-25vh lg:h-30vh lg:min-h-100 
                sm:min-h-100 max-h-150 " 
                xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(29,161,242,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(29,161,242,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(29,161,242,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(29,161,242)" />
                    </g>
                </svg>
            </div>
            <div className="flex flex-col justify-center items-center relative h-20 text-center bg-[#1da1f2] text-white">
                <p className="text-1xl leading-none">Juan Pablo Valencia  2023 &#169; </p>
            </div>
        </div>
    );
};
