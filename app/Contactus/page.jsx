import { Mail, Phone, MapPin, Clock, User, MessageSquare, FileText } from "lucide-react";
import { Open_Sans, Nunito } from "next/font/google";
import { Button } from "@/components/ui/button";
import Header1 from "@/_components/Header1";
import Footer from "@/_components/Footer";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["700", "800"] });

const Contact = () => {
  return (
    <>
      <Header1 />

      {/* Contact Section */}
      <section className="py-16 bg-gray-50 mt-16">
        <div className="container max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className={`text-4xl font-extrabold text-center text-gray-900 ${nunito.className}`}>
            Get in Touch 📩
          </h1>
          <p className={`text-center text-gray-600 mt-3 ${openSans.className}`}>
            We'd love to hear from you. Fill in the form and we'll get back to you shortly.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-10">
            
            {/* Left: Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <form className="space-y-5">
                
                {/* Name */}
                <div className="flex items-center border-b border-gray-300 py-2">
                  <User className="text-gray-500 w-5 h-5 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Email */}
                <div className="flex items-center border-b border-gray-300 py-2">
                  <Mail className="text-gray-500 w-5 h-5 mr-3" />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex items-center border-b border-gray-300 py-2">
                  <Phone className="text-gray-500 w-5 h-5 mr-3" />
                  <input 
                    type="tel" 
                    placeholder="Your Phone" 
                    className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Subject */}
                <div className="flex items-center border-b border-gray-300 py-2">
                  <FileText className="text-gray-500 w-5 h-5 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Message */}
                <div className="flex items-start border-b border-gray-300 py-2">
                  <MessageSquare className="text-gray-500 w-5 h-5 mr-3 mt-2" />
                  <textarea 
                    placeholder="Your Message" 
                    rows={3}
                    className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button 
                  className={`w-full py-3 mt-4 text-lg font-medium ${nunito.className}`}
                  style={{ backgroundColor: "#0c97a5", color: "#ffffff" }}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right: Contact Information */}
            <div className="bg-[#0c97a5] text-white rounded-lg p-8">
              
              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-7 h-7 text-white" />
                <div>
                  <h3 className={`text-xl font-semibold ${nunito.className}`}>Our Address</h3>
                  <p className={`text-gray-200 ${openSans.className}`}>
                    123 Medical Avenue, Suite 456, New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6">
                <Phone className="w-7 h-7 text-white" />
                <div>
                  <h3 className={`text-xl font-semibold ${nunito.className}`}>Call Us</h3>
                  <p className={`text-gray-200 ${openSans.className}`}>+1 234 567 890</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <Mail className="w-7 h-7 text-white" />
                <div>
                  <h3 className={`text-xl font-semibold ${nunito.className}`}>Email Us</h3>
                  <p className={`text-gray-200 ${openSans.className}`}>contact@medlearning.com</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <Clock className="w-7 h-7 text-white" />
                <div>
                  <h3 className={`text-xl font-semibold ${nunito.className}`}>Working Hours</h3>
                  <p className={`text-gray-200 ${openSans.className}`}>
                    Mon - Fri: 9:00 AM - 6:00 PM <br />
                    Sat - Sun: Closed
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
