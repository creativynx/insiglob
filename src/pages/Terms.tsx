import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import ScrollToTop from '../components/ScrollToTop';

const Terms = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-light-bg font-body text-body-color">
            <Navbar />

            <section className="pt-[150px] pb-[100px] bg-white">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold text-heading-color mb-2">Terms & Conditions</h1>
                        <p className="text-sm text-body-color mb-10">Last Updated: {new Date().toLocaleDateString()}</p>

                        <div className="space-y-10">
                            {[
                                {
                                    title: "1. Introduction",
                                    content: "These Terms & Conditions govern the use of services provided by insiglob. By engaging with our services, you agree to these terms."
                                },
                                {
                                    title: "2. Scope of Services",
                                    content: (
                                        <>
                                            <p className="mb-4">insiglob provides:</p>
                                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                                <li>Market research</li>
                                                <li>Firmographic & demographic data collection</li>
                                                <li>Business intelligence datasets</li>
                                                <li>Data verification and validation</li>
                                                <li>Secondary research using public and licensed sources</li>
                                            </ul>
                                            <p className="mb-4">We do not provide:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Legal advice</li>
                                                <li>Financial consulting</li>
                                                <li>Investment guarantees</li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    title: "3. Research Methodology Disclosure",
                                    content: (
                                        <>
                                            <p className="mb-4">Our services are based on:</p>
                                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                                <li>Secondary research</li>
                                                <li>Publicly available information</li>
                                                <li>Licensed third-party databases</li>
                                            </ul>
                                            <p>Data is collected, organized, verified, and delivered in formats such as Excel or Google Sheets.</p>
                                        </>
                                    )
                                },
                                {
                                    title: "4. Client Responsibilities",
                                    content: (
                                        <>
                                            <p className="mb-4">Clients agree to:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Provide accurate project requirements</li>
                                                <li>Use delivered data ethically and legally</li>
                                                <li>Not misuse, resell, or redistribute the data without written consent</li>
                                                <li>Comply with all applicable laws when using the research output</li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    title: "5. Intellectual Property Rights",
                                    content: (
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Upon full payment, the final deliverables belong to the client.</li>
                                            <li>insiglob retains ownership of:
                                                <ul className="list-circle pl-5 mt-2 space-y-1">
                                                    <li>Research methods</li>
                                                    <li>Templates</li>
                                                    <li>Processes</li>
                                                    <li>Tools and workflows</li>
                                                </ul>
                                            </li>
                                            <li>We reserve the right to showcase anonymized work samples for portfolio purposes.</li>
                                        </ul>
                                    )
                                },
                                {
                                    title: "6. Confidentiality",
                                    content: (
                                        <>
                                            <p className="mb-4">We commit to:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Protecting all client information</li>
                                                <li>Using data only for agreed purposes</li>
                                                <li>Ensuring employees and partners are bound by confidentiality agreements</li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    title: "7. Payment Terms",
                                    content: (
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Payment terms will be defined in the proposal or invoice.</li>
                                            <li>Work may begin after advance or full payment as agreed.</li>
                                            <li>Late payments may result in project suspension.</li>
                                        </ul>
                                    )
                                },
                                {
                                    title: "8. Refund Policy",
                                    content: (
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Once research work has started, no refunds will be issued.</li>
                                            <li>If a project is canceled before work begins, refunds (if any) will be at insiglob’s discretion.</li>
                                        </ul>
                                    )
                                },
                                {
                                    title: "9. Data Accuracy Disclaimer",
                                    content: (
                                        <>
                                            <p className="mb-4">insiglob strives to provide high-quality and verified data. However:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>We do not guarantee 100% accuracy.</li>
                                                <li>Data may change over time due to updates in public or third-party sources.</li>
                                                <li>Clients must independently verify critical information before making business decisions.</li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    title: "10. Limitation of Liability",
                                    content: (
                                        <>
                                            <p className="mb-4">insiglob shall not be liable for:</p>
                                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                                <li>Business losses</li>
                                                <li>Lost profits</li>
                                                <li>Missed opportunities</li>
                                                <li>Decisions made based on delivered research</li>
                                            </ul>
                                            <p>Our maximum liability, if any, shall not exceed the amount paid for the specific service.</p>
                                        </>
                                    )
                                },
                                {
                                    title: "11. Ethical Research Commitment",
                                    content: (
                                        <>
                                            <p className="mb-4">We confirm that:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>We do not engage in illegal data scraping</li>
                                                <li>We do not misuse personal data</li>
                                                <li>We follow ethical and transparent research practices</li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    title: "12. Non-Solicitation",
                                    content: (
                                        <>
                                            <p className="mb-4">Clients agree not to:</p>
                                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                                <li>Directly hire or solicit our employees or contractors</li>
                                                <li>Bypass insiglob to work with our data partners</li>
                                            </ul>
                                            <p>for a period of 12 months after project completion.</p>
                                        </>
                                    )
                                },
                                {
                                    title: "13. Termination of Services",
                                    content: (
                                        <>
                                            <p className="mb-4">We reserve the right to terminate services if:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Payment terms are violated</li>
                                                <li>Data is misused</li>
                                                <li>These terms are breached</li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    title: "14. Governing Law & Jurisdiction",
                                    content: (
                                        <>
                                            <p className="mb-4">These Terms shall be governed by the laws of India.</p>
                                            <p>Any disputes shall be subject to the courts of Chennai, Tamilnadu.</p>
                                        </>
                                    )
                                },
                                {
                                    title: "15. Contact Information",
                                    content: (
                                        <>
                                            <p className="mb-4">For any questions regarding these Terms:</p>
                                            <ul className="list-none space-y-1">
                                                <li><span className="font-semibold">Company:</span> insiglob</li>
                                                <li><span className="font-semibold">Email:</span> terms@insiglob.com</li>
                                                <li><span className="font-semibold">Phone:</span> +91 8903426268</li>
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

export default Terms;
