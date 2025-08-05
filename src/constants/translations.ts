export type TranslationText = {
  nav: {
    home: string;
    about: string;
    gallery: string;
    projects: string;
    studio: string;
    visit: string;
    contact: string;
    accessibility: string;
  };
  home: {
    welcome: string;
    mainHeading: string;
    subHeading: string;
    cta: {
      viewProjects: string;
      contact: string;
    };
    valueCards: Array<{
      title: string;
      text: string;
    }>;
    rental: {
      title: string;
      steps: Array<{
        title: string;
        text: string;
      }>;
    };
  };
  about: {
    title: string;
    intro: string;
    story: {
      title: string;
      text1: string;
      text2: string;
    };
    journey: {
      title: string;
      milestones: Array<{
        year: string;
        title: string;
        text: string;
      }>;
    };
  };
  projects: {
    title: string;
    intro: string;
    tabs: {
      byProject: string;
      byCompany: string;
    };
    projectTypes: {
      theater: string;
      ballet: string;
      film: string;
      opera: string;
      event: string;
      tvSeries: string;
    };
  };
  accessibility: {
    title: string;
    commitment: string;
    features: string;
    contact: string;
  };
  visit: {
    title: string;
    intro: string;
    schedule: {
      title: string;
      weekdays: string;
      friday: string;
      saturday: string;
      hours: string;
      fridayHours: string;
      saturdayClosed: string;
    };
    location: {
      title: string;
      address: string;
      directions: string;
    };
    booking: {
      title: string;
      info: string;
    };
  };
  gallery: {
    title: string;
    intro: string;
    categories: {
      theater: string;
      film: string;
      events: string;
    };
  };
  studio: {
    title: string;
    intro: string;
    perfectFor: {
      title: string;
      items: Array<{
        title: string;
        desc: string;
      }>;
    };
    whatsIncluded: {
      title: string;
      items: Array<{
        title: string;
        desc: string;
      }>;
    };
  };
  contact: {
    title: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      organization: string;
      submit: string;
    };
    subjectOptions: {
      general: string;
      rental: string;
      photography: string;
      other: string;
    };
    successMessage: string;
    errorMessage: string;
  };
};

export const translations: Record<string, TranslationText> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      gallery: 'Gallery',
      projects: 'Projects',
      studio: 'Photography Studio',
      visit: 'Visit Us',
      contact: 'Contact Us',
      accessibility: 'Accessibility'
    },
    home: {
      welcome: 'WELCOME TO M-LEV COSTUMES',
      mainHeading: 'Bring Your Vision to Life with Perfect Costumes',
      subHeading: 'Discover our extensive collection of high-quality costumes for theater, film, and events.',
      cta: {
        viewProjects: 'View Projects',
        contact: 'Contact Us'
      },
      valueCards: [
        {
          title: 'Historical Accuracy',
          text: 'Our costumes are meticulously researched and crafted to ensure period authenticity'
        },
        {
          title: 'Professional Quality',
          text: 'High-quality materials and expert craftsmanship for stage and screen'
        },
        {
          title: 'Extensive Collection',
          text: 'From medieval to modern, find the perfect costume for your production'
        }
      ],
      rental: {
        title: 'Rental Process',
        steps: [
          {
            title: 'Browse',
            text: 'Explore our extensive collection online or in person'
          },
          {
            title: 'Select',
            text: 'Choose the perfect costume for your needs'
          },
          {
            title: 'Book',
            text: 'Reserve your costume with a simple booking process'
          },
          {
            title: 'Return',
            text: 'Return the costume in good condition'
          }
        ]
      }
    },
    about: {
      title: 'About M-Lev Costumes',
      intro: 'With decades of experience in theatrical costume design, we bring stories to life through authentic and meticulously crafted period costumes.',
      story: {
        title: 'Our Story',
        text1: 'Founded in 1990, M-Lev Costumes began with a passion for historical accuracy and theatrical excellence.',
        text2: 'Today, we serve theater companies, film productions, and events across the country with our extensive collection of high-quality costumes.'
      },
      journey: {
        title: 'Our Journey',
        milestones: [
          {
            year: '1990',
            title: 'The Beginning',
            text: 'Started as a small costume workshop in Tel Aviv'
          },
          {
            year: '2000',
            title: 'Major Expansion',
            text: 'Opened our first large-scale costume rental facility'
          },
          {
            year: '2010',
            title: 'Digital Innovation',
            text: 'Launched online costume catalog and booking system'
          },
          {
            year: '2020',
            title: 'Industry Leader',
            text: "Recognized as Israel's premier costume resource"
          }
        ]
      }
    },
    projects: {
      title: 'Our Projects',
      intro: 'Discover our work in theater, film, and special events',
      tabs: {
        byProject: 'By Project',
        byCompany: 'By Company'
      },
      projectTypes: {
        theater: 'Theater',
        ballet: 'Ballet',
        film: 'Film',
        opera: 'Opera',
        event: 'Event',
        tvSeries: 'TV Series'
      }
    },
    accessibility: {
      title: 'Accessibility',
      commitment: 'We are committed to making our services accessible to everyone.',
      features: 'Our facility is equipped with wheelchair access and our staff is trained to assist customers with special needs.',
      contact: 'If you require any special accommodations, please contact us.'
    },
    visit: {
      title: 'Visit Our Studio',
      intro: 'Experience our collection in person at our Tel Aviv location.',
      schedule: {
        title: 'Opening Hours',
        weekdays: 'Sunday - Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        hours: '10:00 - 18:00',
        fridayHours: '10:00 - 14:00',
        saturdayClosed: 'Closed'
      },
      location: {
        title: 'Location',
        address: '123 Dizengoff Street, Tel Aviv',
        directions: 'Near Dizengoff Center, accessible by bus lines 5, 72, and 172'
      },
      booking: {
        title: 'Book an Appointment',
        info: 'For the best experience, we recommend booking an appointment in advance.'
      }
    },
    gallery: {
      title: 'Our Costume Gallery',
      intro: 'Explore our extensive collection of professional costumes across various categories',
      categories: {
        theater: 'Theater Productions',
        film: 'Film Projects',
        events: 'Special Events'
      }
    },
    studio: {
      title: 'Photo Studio',
      intro: 'Professional photography services in our fully equipped studio. Perfect for costume documentation, portfolios, and special events.',
      perfectFor: {
        title: 'Perfect For',
        items: [
          { title: 'Theater Productions', desc: 'Promotional materials and archives' },
          { title: 'Special Events', desc: 'Pre-event costume photography' },
          { title: 'Wedding Photos', desc: 'Unique pre-wedding shoots' },
          { title: 'Portfolio Building', desc: 'Actor and model portfolios' },
          { title: 'Costume Documentation', desc: 'High-quality costume records' },
          { title: 'Social Media Content', desc: 'Professional content creation' }
        ]
      },
      whatsIncluded: {
        title: 'What\'s Included',
        items: [
          { title: 'Professional Photographer', desc: 'Experienced in costume and fashion photography' },
          { title: 'Lighting Equipment', desc: 'Professional studio lighting setup' },
          { title: 'Makeup Artist', desc: 'Professional makeup services available' },
          { title: 'Digital Files', desc: 'High-resolution images provided' },
          { title: 'Costume Styling', desc: 'Expert costume fitting and styling' }
        ]
      }
    },
    contact: {
      title: 'Contact Us',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Message',
        organization: 'Organization',
        submit: 'Send Message'
      },
      subjectOptions: {
        general: 'General Inquiry',
        rental: 'Costume Rental',
        photography: 'Photography Services',
        other: 'Other'
      },
      successMessage: 'Thank you for your message. We will get back to you soon.',
      errorMessage: 'Sorry, there was an error sending your message. Please try again.'
    }
  },
  he: {
    nav: {
      home: 'דף הבית',
      about: 'אודות',
      gallery: 'גלריה',
      projects: 'פרויקטים',
      studio: 'סטודיו צילום',
      visit: 'בקרו אותנו',
      contact: 'צור קשר',
      accessibility: 'נגישות'
    },
    home: {
      welcome: 'ברוכים הבאים למ-לב תלבושות',
      mainHeading: 'הגשימו את החזון שלכם עם התלבושות המושלמות',
      subHeading: 'גלו את האוסף המקיף שלנו של תלבושות איכותיות לתיאטרון, סרטים ואירועים',
      cta: {
        viewProjects: 'צפו בפרויקטים',
        contact: 'צרו קשר'
      },
      valueCards: [
        {
          title: 'דיוק היסטורי',
          text: 'התלבושות שלנו נחקרות ומעוצבות בקפידה להבטחת אותנטיות תקופתית'
        },
        {
          title: 'איכות מקצועית',
          text: 'חומרים איכותיים ומלאכת יד מומחית לבמה ולמסך'
        },
        {
          title: 'אוסף נרחב',
          text: 'מימי הביניים ועד המודרני, מצאו את התלבושת המושלמת להפקה שלכם'
        }
      ],
      rental: {
        title: 'תהליך ההשכרה',
        steps: [
          {
            title: 'עיון',
            text: 'גלו את האוסף הנרחב שלנו באופן מקוון או אישית'
          },
          {
            title: 'בחירה',
            text: 'בחרו את התלבושת המושלמת לצרכים שלכם'
          },
          {
            title: 'הזמנה',
            text: 'הזמינו את התלבושת בתהליך הזמנה פשוט'
          },
          {
            title: 'החזרה',
            text: 'החזירו את התלבושת במצב טוב'
          }
        ]
      }
    },
    about: {
      title: 'אודות מ-לב תלבושות',
      intro: 'עם עשרות שנות ניסיון בעיצוב תלבושות תיאטרון, אנו מחיים סיפורים דרך תלבושות תקופתיות אותנטיות ומעוצבות בקפידה.',
      story: {
        title: 'הסיפור שלנו',
        text1: 'מ-לב תלבושות נוסדה ב-1990, מתוך תשוקה לדיוק היסטורי ומצוינות תיאטרלית.',
        text2: 'כיום, אנו משרתים חברות תיאטרון, הפקות סרטים ואירועים בכל רחבי הארץ עם אוסף נרחב של תלבושות איכותיות.'
      },
      journey: {
        title: 'המסע שלנו',
        milestones: [
          {
            year: '1990',
            title: 'ההתחלה',
            text: 'התחלנו כסדנת תלבושות קטנה בתל אביב'
          },
          {
            year: '2000',
            title: 'הרחבה משמעותית',
            text: 'פתחנו את מתקן השכרת התלבושות הגדול הראשון שלנו'
          },
          {
            year: '2010',
            title: 'חדשנות דיגיטלית',
            text: 'השקנו קטלוג תלבושות מקוון ומערכת הזמנות'
          },
          {
            year: '2020',
            title: 'מובילים בתעשייה',
            text: 'הוכרנו כמקור התלבושות המוביל בישראל'
          }
        ]
      }
    },
    projects: {
      title: 'הפרויקטים שלנו',
      intro: 'גלו את עבודתנו בתיאטרון, קולנוע ואירועים מיוחדים',
      tabs: {
        byProject: 'לפי פרויקט',
        byCompany: 'לפי חברה'
      },
      projectTypes: {
        theater: 'תיאטרון',
        ballet: 'בלט',
        film: 'סרט',
        opera: 'אופרה',
        event: 'אירוע',
        tvSeries: 'סדרת טלוויזיה'
      }
    },
    accessibility: {
      title: 'נגישות',
      commitment: 'אנו מחויבים להנגיש את שירותינו לכולם.',
      features: 'המתקן שלנו מצויד בגישה לכיסאות גלגלים והצוות שלנו מוכשר לסייע ללקוחות עם צרכים מיוחדים.',
      contact: 'אם אתם זקוקים להתאמות מיוחדות, אנא צרו איתנו קשר.'
    },
    visit: {
      title: 'בקרו בסטודיו שלנו',
      intro: 'חוו את האוסף שלנו באופן אישי במיקום שלנו בתל אביב.',
      schedule: {
        title: 'שעות פתיחה',
        weekdays: 'ראשון - חמישי',
        friday: 'שישי',
        saturday: 'שבת',
        hours: '10:00 - 18:00',
        fridayHours: '10:00 - 14:00',
        saturdayClosed: 'סגור'
      },
      location: {
        title: 'מיקום',
        address: 'דיזנגוף 123, תל אביב',
        directions: 'ליד מרכז דיזנגוף, נגיש באמצעות קווי אוטובוס 5, 72, ו-172'
      },
      booking: {
        title: 'קביעת פגישה',
        info: 'לחוויה מיטבית, אנו ממליצים לקבוע פגישה מראש.'
      }
    },
    gallery: {
      title: 'גלריית התלבושות שלנו',
      intro: 'גלו את האוסף הנרחב שלנו של תלבושות מקצועיות בקטגוריות שונות',
      categories: {
        theater: 'הפקות תיאטרון',
        film: 'פרויקטי קולנוע',
        events: 'אירועים מיוחדים'
      }
    },
    studio: {
      title: 'סטודיו צילום',
      intro: 'שירותי צילום מקצועיים בסטודיו המאובזר שלנו. מושלם לתיעוד תלבושות, תיקי עבודות ואירועים מיוחדים.',
      perfectFor: {
        title: 'מושלם עבור',
        items: [
          { title: 'הפקות תיאטרון', desc: 'חומרי פרסום וארכיון' },
          { title: 'אירועים מיוחדים', desc: 'צילומי תלבושות לפני האירוע' },
          { title: 'צילומי חתונה', desc: 'צילומים ייחודיים לפני החתונה' },
          { title: 'בניית תיק עבודות', desc: 'תיקי עבודות לשחקנים ודוגמנים' },
          { title: 'תיעוד תלבושות', desc: 'תיעוד תלבושות באיכות גבוהה' },
          { title: 'תוכן למדיה חברתית', desc: 'יצירת תוכן מקצועי' }
        ]
      },
      whatsIncluded: {
        title: 'מה כלול',
        items: [
          { title: 'צלם מקצועי', desc: 'בעל ניסיון בצילומי תלבושות ואופנה' },
          { title: 'ציוד תאורה', desc: 'מערכת תאורת סטודיו מקצועית' },
          { title: 'מאפר/ת מקצועי/ת', desc: 'שירותי איפור מקצועיים זמינים' },
          { title: 'קבצים דיגיטליים', desc: 'תמונות באיכות גבוהה' },
          { title: 'סטיילינג תלבושות', desc: 'התאמת וסטיילינג תלבושות מקצועי' }
        ]
      }
    },
    contact: {
      title: 'צור קשר',
      form: {
        firstName: 'שם פרטי',
        lastName: 'שם משפחה',
        email: 'דוא"ל',
        phone: 'טלפון',
        subject: 'נושא',
        message: 'הודעה',
        organization: 'ארגון',
        submit: 'שלח הודעה'
      },
      subjectOptions: {
        general: 'פנייה כללית',
        rental: 'השכרת תלבושות',
        photography: 'שירותי צילום',
        other: 'אחר'
      },
      successMessage: 'תודה על פנייתך. נחזור אליך בהקדם.',
      errorMessage: 'מצטערים, הייתה שגיאה בשליחת ההודעה. אנא נסה שוב.'
    }
  }
};
