import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Privacy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-light-bg font-body text-body-color">
            <Navbar />

            <section className="pt-[150px] pb-[100px] bg-white">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold text-heading-color mb-2">Privacy Policy</h1>
                        <p className="text-sm text-body-color mb-10">Last Updated: {new Date().toLocaleDateString()}</p>

                        <div className="space-y-10">
                            {[
                                {
                                    title: "1. Introduction",
                                    content: "insiglob (“we”, “our”, “us”) is a data-driven Research-as-a-Service company. We respect your privacy and are committed to protecting the personal and business information shared with us. This Privacy Policy explains how we collect, use, store, and protect information."
                                },
                                {
                                    title: "2. Information We Collect",
                                    content: (
                                        <>
                                            <p className="mb-4">We may collect the following types of information:</p>

                                            <h4 className="font-bold text-heading-color mb-2">a) Client Information</h4>
                                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                                <li>Name, email address, phone number</li>
                                                <li>Company name and designation</li>
                                                <li>Project requirements and briefs</li>
                                            </ul>

                                            <h4 className="font-bold text-heading-color mb-2">b) Research Data</h4>
                                            <p className="mb-2">Business and professional data collected through:</p>
                                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                                <li>Public websites</li>
                                                <li>Google search</li>
                                                <li>LinkedIn</li>
                                                <li>PitchBook</li>
                                                <li>ZoomInfo</li>
                                                <li>Apollo.io</li>
                                                <li>Other publicly available or licensed data intelligence platforms</li>
                                            </ul>

                                            <h4 className="font-bold text-heading-color mb-2">c) Technical Information</h4>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>IP address</li>
                                                <li>Browser type</li>
                                                <li>Website usage data (via cookies or analytics tools)</li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    title: "3. How We Collect Data",
                                    content: (
                                        <>
                                            <p className="mb-4">We collect data through:</p>
                                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                                <li>Direct communication with clients</li>
                                                <li>Website forms and emails</li>
                                                <li>Secondary research using publicly available sources</li>
                                                <li>Licensed third-party data platforms</li>
                                            </ul>
                                            <p>We do not collect sensitive personal data such as passwords, financial credentials, or government IDs.</p>
                                        </>
                                    )
                                },
                                {
                                    title: "4. Purpose of Data Collection",
                                    content: (
                                        <>
                                            <p className="mb-4">We collect and use data to:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Deliver research and data services</li>
                                                <li>Verify and validate datasets</li>
                                                <li>Communicate with clients</li>
                                                <li>Improve our services</li>
                                                <li>Meet legal and contractual obligations</li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    title: "5. Data Storage & Security",
                                    content: (
                                        <>
                                            <p className="mb-4">Collected data is stored in:</p>
                                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                                <li>Microsoft Excel</li>
                                                <li>Google Sheets</li>
                                                <li>Secure cloud storage</li>
                                            </ul>
                                            <p className="mb-4">We use reasonable technical and organizational measures to protect data from:</p>
                                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                                <li>Unauthorized access</li>
                                                <li>Loss or misuse</li>
                                                <li>Disclosure or alteration</li>
                                            </ul>
                                            <p>Access is restricted to authorized personnel only.</p>
                                        </>
                                    )
                                },
                                {
                                    title: "6. Data Sharing & Disclosure",
                                    content: (
                                        <>
                                            <p className="mb-4">We do not sell, rent, or trade client data.</p>
                                            <p className="mb-4">We may share data only with:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Internal team members under confidentiality agreements</li>
                                                <li>Trusted partners under NDA (if required for project delivery)</li>
                                                <li>Legal authorities when required by law</li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    title: "7. Use of Third-Party Data Sources",
                                    content: "Some research data is collected from third-party platforms and public sources. insiglob does not claim ownership over such data and is not responsible for changes, inaccuracies, or removals made by those platforms."
                                },
                                {
                                    title: "8. Client Rights",
                                    content: (
                                        <>
                                            <p className="mb-4">You have the right to:</p>
                                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                                <li>Request access to your data</li>
                                                <li>Request correction of inaccurate data</li>
                                                <li>Request deletion of your data</li>
                                                <li>Withdraw consent for future processing</li>
                                            </ul>
                                            <p>Requests can be sent to: Contact@insiglob.com</p>
                                        </>
                                    )
                                },
                                {
                                    title: "9. Cookies Policy",
                                    content: "Our website may use cookies to enhance user experience and analyze traffic. You may disable cookies in your browser settings."
                                },
                                {
                                    title: "10. Legal Compliance",
                                    content: (
                                        <>
                                            <p className="mb-4">We comply with:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Information Technology Act, 2000 (India)</li>
                                                <li>IT Rules, 2011</li>
                                                <li>Applicable global data protection standards where required</li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    title: "11. Policy Updates",
                                    content: "We may update this Privacy Policy from time to time. The latest version will always be available on our website."
                                },
                                {
                                    title: "12. Contact Information",
                                    content: (
                                        <>
                                            <p className="mb-4">For privacy-related concerns:</p>
                                            <ul className="list-none space-y-1">
                                                <li><span className="font-semibold">Company:</span> insiglob</li>
                                                <li><span className="font-semibold">Email:</span> Contact@insiglob.com</li>
                                                <li><span className="font-semibold">Address:</span> Chennai, Tamilnadu, India</li>
                                            </ul>
                                        </>
                                    )
                                }
                            ].map((section, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                                    <h2 className="text-xl font-bold text-heading-color mb-4">{section.title}</h2>
                                    <div className="text-body-color leading-relaxed">
                                        {section.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            {/* <ScrollToTop /> */}
        </div>
    );
};

export default Privacy;
