import ContactForm from "../components/contact-form";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
            <div className="max-w-3xl w-full space-y-8">
                <div>
                    <h2 className="my-6 text-center text-3xl font-extrabold text-white">Let&apos;s Connect</h2>
                    <p className="mt-2 text-sm text-white">Thank you for visiting my portfolio website. I&apos;m thrilled that you&apos;re interested in connecting with me. Whether you have a question, a project idea, or just want to say hello, I&apos;d love to hear from you!</p>
                    <p className="mt-2 text-sm text-white">Feel free to reach out to me using the contact form below or connect with me on my social media profiles. I&apos;m always open to new opportunities and collaborations, so don&apos;t hesitate to get in touch.</p>
                </div>
                <ContactForm />

                <div className="flex gap-4 justify-center">
                    <Link href="https://www.linkedin.com/in/xiao-zzz/" target="_blank" className="hover:scale-110">
                        <svg className="w-5 fill-current text-blue-700 " viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M15 0H1C0.447 0 0 0.447 0 1v14c0 0.553 0.447 1 1 1h14c0.553 0 1-0.447 1-1V1C16 0.447 15.553 0 15 0ZM5.219 12.109H3.172V5.688H5.22V12.109ZM4.195 4.875C3.389 4.875 2.719 4.199 2.719 3.375C2.719 2.552 3.389 1.875 4.195 1.875C5 1.875 5.672 2.552 5.672 3.375C5.672 4.199 5.001 4.875 4.195 4.875ZM12.609 12.109H10.563V9.766C10.563 8.572 10.541 6.891 9.094 6.891C8.109 6.891 7.781 7.694 7.781 8.641V12.109H5.734V5.688H7.687V6.781H7.781C8.094 6.344 8.688 5.906 9.562 5.906C11.375 5.906 12.609 7.219 12.609 9.375V12.109Z" fill="currentColor"></path></svg>
                    </Link>

                    <Link href="https://github.com/xxxiao971006" target="_blank" className="hover:scale-110">
                        {/* <svg className="w-8 fill-current text-gray-800 hover:text-gray-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.386.6.11.82-.261.82-.581 0-.286-.011-1.04-.016-2.041-3.338.725-4.042-1.611-4.042-1.611C4.342 18.019 3.57 17.678 3.57 17.678c-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.809 1.305 3.497.998.108-.779.416-1.305.756-1.604-2.65-.3-5.454-1.325-6.554-3.03-.276-.612-.585-.916-.895-1.106-.288-.179-.701-.617-.009-.627.65-.011 1.117.598 1.27.851.743 1.241 1.931.887 2.403.676.072-.537.287-.886.522-1.092-1.827-.263-3.742-.913-3.742-4.065 0-.897.321-1.63.846-2.204-.085-.21-.367-1.044.081-2.176 0 0 .69-.22 2.26.839.657-.182 1.363-.273 2.06-.277.695.004 1.398.095 2.06.277 1.568-1.059 2.257-.839 2.257-.839.45 1.132.167 1.966.083 2.176.527.574.844 1.307.844 2.204 0 3.158-1.918 3.798-3.752 4.06.295.253.561.756.561 1.523 0 1.099-.01 1.985-.01 2.257 0 .322.215.698.827.578C20.565 21.796 24 17.304 24 12c0-6.627-5.373-12-12-12Z" fill="currentColor"/></svg> */}
                        <svg className="w-5 fill-current text-gray-800 hover:text-gray-600"viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#ffffff"> <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"></path> <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"></path> </g> </g></svg>
                    </Link>

                </div>
            </div>
        </div>
    )
}
