import '../../css/Android.css';

export function Android() {
    return (
        <div className="devices">
             <div>
                <h1>Conectados globalmente</h1>
             </div>
            <div className="iphone" aria-label="iPhone 16 template">
                <div className="iphone-notch" />
                <div className="iphone-screen">
                    <div className="screen-content" />
                </div>
                <div className="iphone-footer" />
            </div>
            <div className="macbook" aria-label="MacBook template">
                <div className="macbook-screen">
                    <div className="screen-content" />
                </div>
                <div className="macbook-base">
                    <div className="trackpad" />
                </div>
            </div>
        </div>
    );
}