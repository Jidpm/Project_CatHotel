import { Mail } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Phone } from 'lucide-react'
import React from 'react'

function ContactPage() {
  return (
    <>
    <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[#8B6F47] mb-4">Get In Touch</h2>
              <p className="text-[#A68A64]">
                ติดต่อเราเพื่อจองหรือสอบถามข้อมูลเพิ่มเติม
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-14 h-14 bg-[#FAF8F5] rounded-2xl flex items-center justify-center mx-auto">
                  <Phone className="w-7 h-7 text-[#8B6F47]" />
                </div>
                <div>
                  <h3 className="text-[#8B6F47] mb-1">Phone</h3>
                  <p className="text-sm text-[#A68A64]">02-XXX-XXXX</p>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-14 h-14 bg-[#FAF8F5] rounded-2xl flex items-center justify-center mx-auto">
                  <Mail className="w-7 h-7 text-[#8B6F47]" />
                </div>
                <div>
                  <h3 className="text-[#8B6F47] mb-1">Email</h3>
                  <p className="text-sm text-[#A68A64]">
                    info@everydaycathotel.com
                  </p>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-14 h-14 bg-[#FAF8F5] rounded-2xl flex items-center justify-center mx-auto">
                  <MapPin className="w-7 h-7 text-[#8B6F47]" />
                </div>
                <div>
                  <h3 className="text-[#8B6F47] mb-1">Location</h3>
                  <p className="text-sm text-[#A68A64]">Bangkok, Thailand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default ContactPage