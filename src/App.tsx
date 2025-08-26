import React from 'react';
import { Sparkles, Zap, Rocket } from 'lucide-react';

function App() {
  return (<>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" dir="rtl">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo/Icon section */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
                <Rocket className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
              هذه المنصة تحت الإنشاء
            </span>
          </h1>

          {/* Animated underline */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              <div className="absolute top-0 left-0 w-20 h-1 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Subtitle with typing effect styling */}
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed mb-12">
            نعمل على إنشاء تجربة رقمية استثنائية
            <span className="inline-block w-0.5 h-8 bg-purple-400 ml-1 animate-pulse"></span>
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: 'سرعة فائقة', desc: 'أداء محسّن' },
              { icon: Sparkles, title: 'تصميم ذكي', desc: 'واجهة عصرية' },
              { icon: Rocket, title: 'تقنية متقدمة', desc: 'حلول مبتكرة' }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-slate-400 text-sm mb-2">
              <span>التقدم</span>
              <span>10%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" style={{ width: '10%' }}></div>
            </div>
          </div>
             <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed mb-12">
            يتم بناء هذه المنصة بأحدث التقنيات من خلال <a href='https://wa.me/201060186098' className='text-purple-400 underline'>شركة ميخوتك</a>     </p>
          {/* Smart loading animation */}
          <div className="flex justify-center items-center space-x-4 space-x-reverse">
            <div className="flex space-x-2 space-x-reverse">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
            <span className="text-slate-400 text-sm font-medium">جاري التحميل...</span>
          </div>

          {/* Notification badge */}
          <div className="fixed top-6 right-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
            قريباً جداً
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
   </>
  );
}

export default App;