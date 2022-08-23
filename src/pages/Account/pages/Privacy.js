import React from 'react'
import { Linking, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/pro-light-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import accountStyles from '../AccountStyles'
library.add(faAngleLeft, faLocationDot)

const Privacy = ({ navigation, styles, modal }) => {

    return (
        <SafeAreaView style={styles.screenWrapper}>
            <View style={{ flex: 1, paddingHorizontal: 18 }}>
                {!modal && (
                    <>
                        <TouchableOpacity style={[styles.circleButton, accountStyles.backButton]} onPress={() => navigation.navigate('Account', { screen: 'Home'})}>
                            <FontAwesomeIcon icon={['fal', 'angle-left']} size={20} />
                        </TouchableOpacity>
                        <Text style={[ styles.pageHeader, { paddingBottom: 14 } ]}>Privacy Policy</Text>
                    </>
                )}
                
                <ScrollView style={{ marginBottom: 14 }}>
                    <Text style={accountStyles.legalText}>This privacy notice for Road Trip NFT, LLC ("Company," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:</Text>

                    <ListItem>Visit our website at <Text style={styles.link} onPress={() => {Linking.openURL('https://www.roadtripnft.com')}}>https://www.roadtripnft.com</Text>, or any website of ours that links to this privacy notice</ListItem>
                    <ListItem>Download and use our mobile application (Road Trip NFT), or any other application of ours that links to this privacy notice</ListItem>
                    <ListItem>Engage with us in other related ways, including any sales, marketing, or events</ListItem>

                    <Text style={accountStyles.legalText}><Text style={styles.bold}>Questions or concerns?</Text> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at hello@roadtripnft.com.</Text>

                    <Text style={accountStyles.legalHeader}>What Information Do We Collect?</Text>
                    <Text style={[styles.bold]}>Personal information you disclose to us</Text>
                    <Text style={accountStyles.legalText}>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</Text>

                    <Text style={[styles.bold]}>Personal information provided by you</Text>
                    <Text style={accountStyles.legalText}>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following: names, email addresses, usernames and passwords</Text>

                    <Text style={[styles.bold]}>Sensitive information</Text>
                    <Text style={accountStyles.legalText}>We do not process sensitive information.</Text>
                    
                    <Text style={[styles.bold]}>Application data</Text>
                    <Text style={accountStyles.legalText}>If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</Text>

                    <ListItem>Geolocation Information. We may request access or permission to track location-based information from your mobile device, while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.</ListItem>
                    <ListItem>Push Notifications. We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</ListItem>

                    <Text style={accountStyles.legalText}>This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</Text>
                    <Text style={accountStyles.legalText}>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</Text>

                    <Text style={[styles.bold]}>Information automatically collected</Text>
                    <Text style={accountStyles.legalText}>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</Text>
                    <Text style={accountStyles.legalText}>Like many businesses, we also collect information through cookies and similar technologies. The information we collect includes:</Text>

                    <ListItem>Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</ListItem>
                    <ListItem>Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</ListItem>
                    <ListItem>Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</ListItem>

                    <Text style={accountStyles.legalHeader}>How do we process your information?</Text>
                    <Text style={accountStyles.legalText}>We may modify these Terms at any time. If we do so, we’ll let you know either by posting the modified Terms on the Site or App or through other communications. It’s important that you review the Terms whenever we modify them, because if you continue to use the Services after we have posted modified Terms on the Site or App, or otherwise communicate them to you, you are indicating to us that you agree to be bound by the modified Terms. If you don’t agree to be bound by the modified Terms, then you may not use the Services anymore. Because our Services evolve over time, we may change or discontinue all or any part of the Services at any time and without notice.</Text>

                    <Text style={accountStyles.legalHeader}>Changes to Terms or Services</Text>
                    <Text style={accountStyles.legalText}>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</Text>

                    <ListItem><Text style={styles.bold}>To facilitate account creation and authentication and otherwise manage user accounts.</Text> We may process your information so you can create and log in to your account, as well as keep your account in working order.</ListItem>
                    <ListItem><Text style={styles.bold}>To deliver and facilitate delivery of services to the user.</Text> We may process your information to provide you with the requested service.</ListItem>
                    <ListItem><Text style={styles.bold}>To respond to user inquiries/offer support to users.</Text> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</ListItem>
                    <ListItem><Text style={styles.bold}>To send administrative information to you.</Text> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</ListItem>
                    <ListItem><Text style={styles.bold}>To save or protect an individual's vital interest.</Text> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</ListItem>

                    <Text style={accountStyles.legalHeader}>What legal bases do we rely on to process information?</Text>
                    <Text style={accountStyles.legalText}>Please refer to our <Text style={styles.link} onPress={() => {Linking.openURL('https://www.roadtripnft.com/privacy')}}>https://www.roadtripnft.com/privacy</Text> for information on how we collect, use, and disclose information from our users.</Text>

                    <Text style={[styles.bold]}>If you are located in the EU or UK, this section applies to you.</Text>
                    <Text style={accountStyles.legalText}>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</Text>
                    <ListItem>Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</ListItem>
                    <ListItem>Performance of a Contract. We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</ListItem>
                    <ListItem>Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</ListItem>
                    <ListItem>Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</ListItem>

                    <Text style={[styles.bold]}>If you are located in Canada, this section applies to you.</Text>
                    <Text style={accountStyles.legalText}>We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</Text>
                    <Text style={accountStyles.legalText}>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</Text>
                    <ListItem>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</ListItem>
                    <ListItem>For investigations and fraud detection and prevention</ListItem>
                    <ListItem>For business transactions provided certain conditions are met</ListItem>
                    <ListItem>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</ListItem>
                    <ListItem>For identifying injured, ill, or deceased persons and communicating with next of kin</ListItem>
                    <ListItem>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</ListItem>
                    <ListItem>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</ListItem>
                    <ListItem>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</ListItem>
                    <ListItem>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</ListItem>
                    <ListItem>If the collection is solely for journalistic, artistic, or literary purposes</ListItem>
                    <ListItem>If the information is publicly available and is specified by the regulations</ListItem>

                    <Text style={accountStyles.legalHeader}>When and with whom do we share your personal information?</Text>
                    <Text style={accountStyles.legalText}>We may need to share your personal information in the following situations:</Text>
                    <ListItem>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</ListItem>
                    <ListItem>When we use Google Maps Platform APIs. We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). To find out more about Google's Privacy Policy, please refer to this <Text style={styles.link} onPress={() => {Linking.openURL('https://policies.google.com/privacy')}}>https://policies.google.com/privacy</Text>.</ListItem>

                    <Text style={accountStyles.legalHeader}>Do we use cookies and other tracking technologies?</Text>
                    <Text style={accountStyles.legalText}>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</Text>

                    <Text style={accountStyles.legalHeader}>How long do we keep your information?</Text>
                    <Text style={accountStyles.legalText}>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</Text>
                    <Text style={accountStyles.legalText}>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</Text>


                    <Text style={accountStyles.legalHeader}>How do we keep your information safe?</Text>
                    <Text style={accountStyles.legalText}>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</Text>

                    <Text style={accountStyles.legalHeader}>What are your privacy rights?</Text>
                    <Text style={accountStyles.legalText}>In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section ”How can you contact us?” below.</Text>
                    <Text style={accountStyles.legalText}>We will consider and act upon any request in accordance with applicable data protection laws.</Text>
                    <Text style={accountStyles.legalText}>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <Text style={styles.link} onPress={() => {Linking.openURL('https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm')}}>https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</Text>.</Text>
                    <Text style={accountStyles.legalText}>If you are located in Switzerland, the contact details for the data protection authorities are available here: <Text style={styles.link} onPress={() => {Linking.openURL('https://www.edoeb.admin.ch/edoeb/en/home.html')}}>https://www.edoeb.admin.ch/edoeb/en/home.html</Text>.</Text>

                    <Text style={[styles.bold]}>Withdrawing your consent</Text>
                    <Text style={accountStyles.legalText}>If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section ”How can you contact us?" below or updating your preferences.</Text>
                    <Text style={accountStyles.legalText}>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</Text>

                    <Text style={[styles.bold]}>Opting out of marketing and promotional communications</Text>
                    <Text style={accountStyles.legalText}>You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "How can you contact us?” below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</Text>

                    <Text style={[styles.bold]}>Account information</Text>
                    <Text style={accountStyles.legalText}>If you would at any time like to review or change the information in your account or terminate your account, you can:</Text>
                    <ListItem>Log in to your account settings and update your user account.</ListItem>
                    <ListItem>Contact us using the contact information provided.</ListItem>
                    <Text style={accountStyles.legalText}>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</Text>

                    <Text style={[styles.bold]}>Cookies and similar technologies</Text>
                    <Text style={accountStyles.legalText}>Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.</Text>
                    <Text style={accountStyles.legalText}>If you have questions or comments about your privacy rights, you may email us at legal@roadtripnft.com.</Text>

                    <Text style={accountStyles.legalHeader}>Controls for do not track features</Text>
                    <Text style={accountStyles.legalText}>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</Text>

                    <Text style={accountStyles.legalHeader}>Do California residents have specific rights?</Text>
                    <Text style={accountStyles.legalText}>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</Text>
                    <Text style={accountStyles.legalText}>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).</Text>

                    <Text style={[styles.bold]}>CCPA Privacy Notice</Text>
                    <Text style={accountStyles.legalText}>The California Code of Regulations defines a "resident" as:</Text>
                    <Text style={accountStyles.legalText}>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</Text>
                    <Text style={accountStyles.legalText}>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</Text>
                    <Text style={accountStyles.legalText}>All other individuals are defined as "non-residents."</Text>
                    <Text style={accountStyles.legalText}>If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.</Text>

                    <Text style={[styles.bold]}>What categories of personal information do we collect?</Text>
                    <Text style={accountStyles.legalText}>We have collected the following categories of personal information in the past twelve (12) months:</Text>
                    <ListItem>Identifiers such as names and email addresses</ListItem>
                    <ListItem>Personal information such as names and contact information</ListItem>
                    <ListItem>Geolocation data such as device location</ListItem>

                    <Text style={accountStyles.legalText}>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</Text>
                    <ListItem>Receiving help through our customer support channels;</ListItem>
                    <ListItem>Participation in customer surveys or contests; and</ListItem>
                    <ListItem>Facilitation in the delivery of our Services and to respond to your inquiries.</ListItem>

                    <Text style={[styles.bold]}>How do we use and share your personal information?</Text>
                    <Text style={accountStyles.legalText}>More information about our data collection and sharing practices can be found in this privacy notice.</Text>
                    <Text style={accountStyles.legalText}>You may contact us by email at legal@roadtripnft.com, or by referring to the contact details at the bottom of this document.</Text>
                    <Text style={accountStyles.legalText}>If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</Text>

                    <Text style={[styles.bold]}>Will your information be shared with anyone else?</Text>
                    <Text style={accountStyles.legalText}>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</Text>
                    <Text style={accountStyles.legalText}>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</Text>
                    <Text style={accountStyles.legalText}>Road Trip NFT, LLC has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Road Trip NFT, LLC will not sell personal information in the future belonging to website visitors, users, and other consumers.</Text>

                    <Text style={[styles.bold]}>Your rights with respect to your personal data</Text>
                    <Text style={[styles.bold]}>Right to request deletion of the data — Request to delete</Text>
                    <Text style={accountStyles.legalText}>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</Text>
                    <Text style={[styles.bold]}>Right to be informed — Request to know</Text>
                    <Text style={accountStyles.legalText}>Depending on the circumstances, you have a right to know:</Text>
                    <ListItem>whether we collect and use your personal information;</ListItem>
                    <ListItem>the categories of personal information that we collect;</ListItem>
                    <ListItem>the purposes for which the collected personal information is used;</ListItem>
                    <ListItem>whether we sell your personal information to third parties;</ListItem>
                    <ListItem>the categories of personal information that we sold or disclosed for a business purpose;</ListItem>
                    <ListItem>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</ListItem>
                    <ListItem>the business or commercial purpose for collecting or selling personal information.</ListItem>
                    <Text style={accountStyles.legalText}>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</Text>

                    <Text style={[styles.bold]}>Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights</Text>
                    <Text style={accountStyles.legalText}>We will not discriminate against you if you exercise your privacy rights.</Text>

                    <Text style={[styles.bold]}>Verification process</Text>
                    <Text style={accountStyles.legalText}>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</Text>
                    <Text style={accountStyles.legalText}>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</Text>

                    <Text style={[styles.bold]}>Other privacy rights</Text>
                    <ListItem>You may object to the processing of your personal information.</ListItem>
                    <ListItem>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</ListItem>
                    <ListItem>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</ListItem>
                    <ListItem>You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</ListItem>
                    <Text style={accountStyles.legalText}>To exercise these rights, you can contact us by email at legal@knightley.co, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</Text>

                    <Text style={accountStyles.legalHeader}>Do we make updates to this notice?</Text>
                    <Text style={accountStyles.legalText}>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</Text>

                    <Text style={accountStyles.legalHeader}>How can you contact us?</Text>
                    <Text style={accountStyles.legalText}>If you have any questions about this notice, please contact Road Trip NFT at legal@roadtripnft.com or by post at 30 5th Street NE UNIT 1005, Atlanta, GA 30308.</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Privacy


const ListItem = ({ children }) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Text>{'\u2022'}</Text>
            <Text style={[accountStyles.legalText, {flex: 1, paddingLeft: 5}]}>{children}</Text>
        </View>
    )
}