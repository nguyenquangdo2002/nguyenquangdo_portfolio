import { useEffect, useState } from "react";

export const TRANSLATIONS = {
  en: {
    nav: {
      skills: "Skills",
      projects: "Projects",
      transformation: "Transformation",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      badge: "Available for hire",
      title: "Minimal portfolio built for modern teams.",
      description: "I create clean web experiences with React and ASP.NET Core.",
    },
    buttons: {
      contact: "Contact",
      github: "View GitHub",
      hire: "Hire me",
    },
    overview: {
      title: "Quick overview",
      stats: [
        { value: ".NET 8", label: "ASP.NET Core" },
        { value: "React", label: "Frontend" },
        { value: "3.0", label: "GPA" },
        { value: "700", label: "TOEIC" },
      ],
    },
    skills: {
      title: "Skills & expertise",
      description: "A compact set of strengths for building clean and dependable web products.",
    },
    projects: {
      label: "Work",
      title: "Projects",
    },
    experience: {
      label: "Background",
      title: "Experience & education",
      education: "Education",
      aboutTitle: "About me",
    },
    faq: {
      label: "Quick answers",
      title: "Common questions",
      items: [
        {
          q: "What roles are you targeting?",
          a: "I'm seeking a full-time Front-end or Full-stack Developer position with strong React and ASP.NET Core skills.",
        },
        {
          q: "Are you available for immediate hire?",
          a: "Yes, I'm ready for full-time roles and can start quickly.",
        },
        {
          q: "What is your English proficiency?",
          a: "I can read technical documentation, participate in code reviews, and work with international teams.",
        },
        {
          q: "Do you have experience with cloud deployment?",
          a: "Yes. I've deployed apps with Docker, Railway, and Vercel.",
        },
      ],
    },
    contact: {
      label: "Let's work together",
      title: "Open to new opportunities.",
      description: "If you're looking for a developer who values clarity, speed, and clean code, let's connect.",
      button: "Email me",
      meta: "0925 709 729 · Gò Vấp, HCMC · github.com/nguyenquangdo2002",
    },
    footer: {
      copyright: "© 2025 Nguyen Quang Do · Full-Stack Web Developer",
    },
    transformation: {
      pageLabel: "Transformation Page",
      title: "Body transformation journey",
      description: "A dedicated page for your weight loss story and two personal photos to compare the progress.",
      storyLabel: "Story",
      periodLabel: "From 2020 to 2024",
      stages: [
        {
          title: "2020 - Graduation",
          subtitle: "Starting point",
          text: "The first photo is graduation day at 18, when the journey toward a stronger body began.",
        },
        {
          title: "2022 - Skinny fat",
          subtitle: "Diet-only phase",
          text: "This phase shows the risk of dieting without strength training: lighter size but lower energy and muscle tone.",
        },
        {
          title: "2024 - Transformation",
          subtitle: "Real training",
          text: "The change came from calisthenics, balanced habits, and building strength with a healthier lifestyle.",
        },
      ],
      detailsLabel: "Details",
      detailItems: [
        "Focus on strength, not just weight.",
        "Train consistently, eat balanced, and rest properly.",
        "Set goals for body shape, health, and mindset.",
      ],
      photoLabel: "Before / After",
      notesTitle: "Notes",
      notesText: "These two photos are stored in the project and displayed on the Transformation page.",
      back: "← Back to homepage",
    },
    language: {
      label: "Language",
      options: {
        en: "English",
        vi: "Tiếng Việt",
        es: "Español",
      },
    },
  },
  vi: {
    nav: {
      skills: "Kỹ năng",
      projects: "Dự án",
      transformation: "Sự biến đổi",
      experience: "Kinh nghiệm",
      contact: "Liên hệ",
    },
    hero: {
      badge: "Có sẵn để cho thuê",
      title: "Mẫu portfolio tối giản dành cho đội nhóm hiện đại.",
      description: "Tôi tạo trải nghiệm web mượt mà với React và ASP.NET Core.",
    },
    buttons: {
      contact: "Liên hệ",
      github: "Xem GitHub",
      hire: "Hãy thuê tôi",
    },
    overview: {
      title: "Tổng quan nhanh",
      stats: [
        { value: ".NET 8", label: "ASP.NET Core" },
        { value: "React", label: "Frontend" },
        { value: "3.0", label: "GPA" },
        { value: "700", label: "TOEIC" },
      ],
    },
    skills: {
      title: "Kỹ năng & chuyên môn",
      description: "Một bộ khả năng gọn nhẹ để xây dựng sản phẩm web sạch và đáng tin cậy.",
    },
    projects: {
      label: "Công việc",
      title: "Dự án",
    },
    experience: {
      label: "Nền tảng",
      title: "Kinh nghiệm & học vấn",
      education: "Học vấn",
      aboutTitle: "Về tôi",
    },
    faq: {
      label: "Câu trả lời nhanh",
      title: "Câu hỏi thường gặp",
      items: [
        {
          q: "Bạn nhắm vào vị trí nào?",
          a: "Tôi đang tìm vị trí Front-end hoặc Full-stack Developer toàn thời gian với kỹ năng React và ASP.NET Core.",
        },
        {
          q: "Bạn có thể nhận việc ngay không?",
          a: "Có, tôi sẵn sàng cho các cơ hội toàn thời gian và có thể bắt đầu nhanh.",
        },
        {
          q: "Trình độ tiếng Anh của bạn thế nào?",
          a: "Tôi có thể đọc tài liệu kỹ thuật, tham gia xem xét mã và làm việc với nhóm quốc tế.",
        },
        {
          q: "Bạn có kinh nghiệm triển khai đám mây không?",
          a: "Có. Tôi đã triển khai ứng dụng với Docker, Railway và Vercel.",
        },
      ],
    },
    contact: {
      label: "Cùng làm việc",
      title: "Sẵn sàng cho cơ hội mới.",
      description: "Nếu bạn cần một lập trình viên coi trọng sự rõ ràng, tốc độ và code sạch, hãy kết nối với tôi.",
      button: "Gửi email",
      meta: "0925 709 729 · Gò Vấp, HCMC · github.com/nguyenquangdo2002",
    },
    footer: {
      copyright: "© 2025 Nguyen Quang Do · Full-Stack Web Developer",
    },
    transformation: {
      pageLabel: "Trang Transformation",
      title: "Hành trình thay đổi hình thể",
      description: "Trang riêng cho câu chuyện giảm cân với hai bức hình cá nhân để so sánh quá trình.",
      storyLabel: "Câu chuyện",
      periodLabel: "Từ 2020 đến 2024",
      stages: [
        {
          title: "2020 - Tốt nghiệp",
          subtitle: "Khởi đầu",
          text: "Ảnh đầu tiên là ngày tốt nghiệp 18 tuổi, khi bắt đầu hành trình hướng đến hình thể mạnh mẽ hơn.",
        },
        {
          title: "2022 - Skinny fat",
          subtitle: "Giai đoạn chỉ ăn kiêng",
          text: "Giai đoạn này cho thấy rủi ro của việc chỉ ăn kiêng mà không rèn luyện sức mạnh: nhẹ hơn nhưng thiếu năng lượng và cơ.",
        },
        {
          title: "2024 - Chuyển mình",
          subtitle: "Tập luyện thực sự",
          text: "Sự thay đổi đến từ calisthenics, thói quen cân bằng và xây dựng sức mạnh với lối sống lành mạnh.",
        },
      ],
      detailsLabel: "Chi tiết",
      detailItems: [
        "Tập trung vào sức mạnh, không chỉ giảm cân.",
        "Tập đều, ăn cân bằng và nghỉ ngơi đúng cách.",
        "Đặt mục tiêu cho thân hình, sức khỏe và tinh thần.",
      ],
      photoLabel: "Trước / Sau",
      notesTitle: "Ghi chú",
      notesText: "Hai tấm ảnh này được lưu trong dự án và hiển thị trên trang Transformation.",
      back: "← Quay lại trang chính",
    },
    language: {
      label: "Ngôn ngữ",
      options: {
        en: "English",
        vi: "Tiếng Việt",
        es: "Español",
      },
    },
  },
  es: {
    nav: {
      skills: "Habilidades",
      projects: "Proyectos",
      transformation: "Transformación",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      badge: "Disponible para contratar",
      title: "Portafolio minimalista para equipos modernos.",
      description: "Creo experiencias web limpias con React y ASP.NET Core.",
    },
    buttons: {
      contact: "Contacto",
      github: "Ver GitHub",
      hire: "Contrátame",
    },
    overview: {
      title: "Resumen rápido",
      stats: [
        { value: ".NET 8", label: "ASP.NET Core" },
        { value: "React", label: "Frontend" },
        { value: "3.0", label: "GPA" },
        { value: "700", label: "TOEIC" },
      ],
    },
    skills: {
      title: "Habilidades y experiencia",
      description: "Un conjunto compacto de fortalezas para construir productos web limpios y confiables.",
    },
    projects: {
      label: "Trabajo",
      title: "Proyectos",
    },
    experience: {
      label: "Antecedentes",
      title: "Experiencia y educación",
      education: "Educación",
      aboutTitle: "Sobre mí",
    },
    faq: {
      label: "Respuestas rápidas",
      title: "Preguntas comunes",
      items: [
        {
          q: "¿Qué roles buscas?",
          a: "Busco una posición de tiempo completo como Front-end o Full-stack Developer con React y ASP.NET Core.",
        },
        {
          q: "¿Estás disponible para comenzar de inmediato?",
          a: "Sí, estoy listo para roles de tiempo completo y puedo comenzar rápido.",
        },
        {
          q: "¿Cómo es tu nivel de inglés?",
          a: "Puedo leer documentación técnica, participar en revisiones de código y trabajar con equipos internacionales.",
        },
        {
          q: "¿Tienes experiencia con despliegue en la nube?",
          a: "Sí. He desplegado aplicaciones con Docker, Railway y Vercel.",
        },
      ],
    },
    contact: {
      label: "Trabajemos juntos",
      title: "Abierto a nuevas oportunidades.",
      description: "Si buscas un desarrollador que valore la claridad, velocidad y código limpio, conectemos.",
      button: "Escríbeme",
      meta: "0925 709 729 · Gò Vấp, HCMC · github.com/nguyenquangdo2002",
    },
    footer: {
      copyright: "© 2025 Nguyen Quang Do · Full-Stack Web Developer",
    },
    transformation: {
      pageLabel: "Página de Transformación",
      title: "Historia de transformación física",
      description: "Una página dedicada a tu historia de pérdida de peso con dos fotos personales para comparar el progreso.",
      storyLabel: "Historia",
      periodLabel: "De 2020 a 2024",
      stages: [
        {
          title: "2020 - Graduación",
          subtitle: "Punto de partida",
          text: "La primera foto es el día de graduación a los 18 años, cuando comenzó el viaje hacia un cuerpo más fuerte.",
        },
        {
          title: "2022 - Skinny fat",
          subtitle: "Fase solo dieta",
          text: "Esta fase muestra el riesgo de hacer dieta sin entrenamiento de fuerza: menos peso pero menos energía y tono muscular.",
        },
        {
          title: "2024 - Transformación",
          subtitle: "Entrenamiento real",
          text: "El cambio llegó con calistenia, hábitos balanceados y construir fuerza con un estilo de vida saludable.",
        },
      ],
      detailsLabel: "Detalles",
      detailItems: [
        "Enfócate en la fuerza, no solo en el peso.",
        "Entrena con constancia, come balanceado y descansa bien.",
        "Define metas para cuerpo, salud y estado mental.",
      ],
      photoLabel: "Antes / Después",
      notesTitle: "Notas",
      notesText: "Estas dos fotos se guardan en el proyecto y se muestran en la página de Transformación.",
      back: "← Volver a la página principal",
    },
    language: {
      label: "Idioma",
      options: {
        en: "English",
        vi: "Tiếng Việt",
        es: "Español",
      },
    },
  },
} as const;

export type Locale = keyof typeof TRANSLATIONS;
export type Translation = typeof TRANSLATIONS[Locale];

const STORAGE_KEY = "locale";
const DEFAULT_LOCALE: Locale = "en";

function getStoredLocale(): Locale | null {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "vi" || stored === "es") {
    return stored;
  }
  return null;
}

function getPreferredLocale(): Locale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const browserLang = window.navigator.language.slice(0, 2).toLowerCase();
  if (browserLang === "vi" || browserLang === "es") {
    return browserLang as Locale;
  }
  return DEFAULT_LOCALE;
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const saved = getStoredLocale();
    if (saved) {
      setLocale(saved);
      return;
    }
    setLocale(getPreferredLocale());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, locale);
    }
  }, [locale]);

  return {
    locale,
    setLocale,
    t: TRANSLATIONS[locale],
  };
}
