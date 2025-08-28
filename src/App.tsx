import React from 'react';
import { GraduationCap, Mail, Phone, Globe, Award, BookOpen, Users, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir="rtl">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 md:py-32 text-center">
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              {/* <GraduationCap className="w-16 h-16 text-white" /> */}
              <img 
                // src="https://taimuni.edu.eg/wp-content/uploads/2023/11/cropped-Logo-TAYM-1.png" 
                src="./logo.png"
                alt="TAIU Logo" 

                 className="w-32 h-32 object-cover rounded-full"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-pulse">
              جامعة تَيم الإسلامية الأمريكية
            </span>
          </h1>
          
          <h2 className="text-xl md:text-3xl lg:text-4xl font-light text-blue-100 mb-8 tracking-wide">
            Taym American Islamic University (TAIU)
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-blue-200">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Globe className="w-4 h-4" />
              <span>التعليم العالمي</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Award className="w-4 h-4" />
              <span>معتمدة دولياً</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Users className="w-4 h-4" />
              <span>مجتمع أكاديمي متميز</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="relative container mx-auto px-6 py-16 md:py-24">
        {/* Coming Soon Alert */}
        <section className="mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-8 text-center shadow-xl">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Star className="w-8 h-8 text-yellow-600 animate-spin" style={{animationDuration: '3s'}} />
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-yellow-800 mb-2">
                🚧 المنصة قيد الإنشاء 🚧
              </p>
              <p className="text-lg md:text-xl font-semibold text-yellow-700">
  Coming Soon - Platform Under Development by{" "}
  <a 
    href="https://wa.me/201060186098" 
    className="font-bold text-blue-600 hover:text-blue-800 hover:underline transition duration-300"
  >
    Mekhotek Company
  </a>
</p>

            </div>
          </div>
        </section>

        {/* Academic Programs Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-20">
          {/* Faculties Section */}
          <section className="group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center justify-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text mb-8 text-center">
                  الكليات الأكاديمية
                </h3>
                
                <div className="space-y-4">
                  {[
                    'كلية اللغة العربية للناطقين بغيرها',
                    'كلية اللغة العربية وعلومها',
                    'كلية الآداب والعلوم الإنسانية',
                    'كلية الشريعة والقانون',
                    'كلية الدراسات الإسلامية (لغات)',
                    'كلية التربية للدراسات العليا وعلوم ذوي الهمم',
                    'كلية الإعلام والذكاء الاصطناعي',
                    'كلية العلوم الإدارية والحاسبات',
                    'كلية الاقتصاد والعلوم السياسية',
                    'كلية الآثار والسياحة وعلم الفندقة',
                    'كلية اللغات والترجمة'
                  ].map((faculty, index) => (
                    <div key={index} className="flex items-start group/item hover:bg-blue-50/50 p-3 rounded-xl transition-all duration-300">
                      <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mt-2 ml-4 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 text-lg leading-relaxed group-hover/item:text-blue-700 transition-colors duration-300">
                        {faculty}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Specialized Diplomas Section */}
          <section className="group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center justify-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-8 text-center">
                  الدبلومات المتخصصة
                </h3>
                
                <div className="space-y-4">
                  {[
                    'دبلومة المتخصص في تعليم العربية للناطقين بغيرها',
                    'دبلومة اللسانيات القضائية',
                    'دبلومة الإعلام الرياضي وفن التعليق',
                    'دبلومة القراءات القرآنية',
                    'دبلومة الإعلام الديني والدعوة',
                    'دبلومة التخاطب',
                    'دبلومة الإعلام السياسي والاقتصادي'
                  ].map((diploma, index) => (
                    <div key={index} className="flex items-start group/item hover:bg-purple-50/50 p-3 rounded-xl transition-all duration-300">
                      <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 ml-4 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 text-lg leading-relaxed group-hover/item:text-purple-700 transition-colors duration-300">
                        {diploma}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section className="group mb-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur opacity-25 group-hover:opacity-35 transition duration-1000"></div>
            <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg mb-6">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
                  تواصل معنا
                </h3>
                <p className="text-emerald-700 text-lg mt-2">نحن هنا لخدمتكم على مدار الساعة</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center md:justify-start group/contact">
                    <div className="flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover/contact:scale-105">
                      <div className="p-2 bg-emerald-100 rounded-xl ml-4">
                        <a href='tel:201110587515'> <Phone className="w-6 h-6 text-emerald-600" /></a>
                      </div>
                      <span className="text-gray-800 font-semibold text-lg">201110587515</span>
                       <span className="text-sm text-gray-500"> 📌 ا.د/عصام ابو عايد</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start group/contact">
                    <div className="flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover/contact:scale-105">
                      <div className="p-2 bg-emerald-100 rounded-xl ml-4">
                       <a href='tel:201277903353'> <Phone className="w-6 h-6 text-emerald-600" /></a>
                      </div>
                      <span className="text-gray-800 font-semibold text-lg">201277903353</span>
                       <span className="text-sm text-gray-500"> 📌 ا.د/ياسر علي</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-center md:justify-start group/contact">
                    <div className="flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover/contact:scale-105">
                      <div className="p-2 bg-teal-100 rounded-xl ml-4">
                        <Mail className="w-6 h-6 text-teal-600" />
                      </div>
                      <a 
                        href="mailto:taimuni2025@gmail.com" 
                        className="text-teal-600 hover:text-teal-800 font-semibold text-lg underline decoration-2 underline-offset-4 hover:decoration-teal-800 transition-all duration-300"
                      >
                        taimuni2025@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start group/contact">
                    <div className="flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover/contact:scale-105">
                      <div className="p-2 bg-teal-100 rounded-xl ml-4">
                        <Mail className="w-6 h-6 text-teal-600" />
                      </div>
                      <a 
                        href="mailto:arabicpro2022@yahoo.com" 
                        className="text-teal-600 hover:text-teal-800 font-semibold text-lg underline decoration-2 underline-offset-4 hover:decoration-teal-800 transition-all duration-300"
                      >
                        arabicpro2022@yahoo.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        
        <div className="relative container mx-auto px-6 py-12 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed">
            © 2025 جامعة تَيم الإسلامية الأمريكية - جميع الحقوق محفوظة
          </p>
          
          <div className="mt-6 flex justify-center space-x-6 space-x-reverse">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-200"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;