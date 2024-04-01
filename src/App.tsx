import React from 'react';
import './App.css';
import Tabs from "./components/tabs/Tabs";
import {DocumentScanner} from "./components/tabs/document-scanner/DocumentScanner";
import {SingStamp} from "./components/tabs/sing-stamp/SingStamp";
import {BatchScanning} from "./components/tabs/batch-scanning/BatchScanning";
import {AdvancedFilters} from "./components/tabs/advanced-filters/AdvancedFilters";
import {ExportShare} from "./components/tabs/export-share/ExportShare";

function App() {
    const [currentStep, setCurrentStep] = React.useState(1);

    return (
        <div className="app">
                <div className='context'>
                    <div className='tab'>
                        {currentStep === 1 && (
                            <DocumentScanner/>
                        )}
                        {currentStep === 2 && (
                            <SingStamp/>
                        )}

                        {currentStep === 3 && (
                            <BatchScanning/>
                        )}
                        {currentStep === 4 && (
                            <AdvancedFilters/>
                        )}

                        {currentStep === 5 && (
                            <ExportShare/>
                        )}
                    </div>

                    <Tabs
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                    />
                </div>
        </div>
    );
}

export default App;
