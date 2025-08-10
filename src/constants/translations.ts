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
    experience: {
      title: string;
      desc: string;
      highlights: Array<{
        title: string;
        desc: string;
      }>;
    };
    journey: {
      title: string;
      steps: Array<{
        title: string;
        desc: string;
      }>;
    };
    gallery: {
      title: string;
    };
    booking: {
      title: string;
      description: string;
      whatsappButton: string;
    };
    cta: {
      viewFullGallery: string;
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
      about: 'Our Story',
      gallery: 'Gallery',
      projects: 'Projects',
      studio: 'Studio Experience',
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
      title: 'Our Story',
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
      title: 'Visit Us',
      intro: 'Visit our costume warehouse in Tel Aviv.',
      schedule: {
        title: 'Opening Hours',
        weekdays: 'Sunday - Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        hours: '9:00 - 16:00',
        fridayHours: 'Closed',
        saturdayClosed: 'Closed'
      },
      location: {
        title: 'Location',
        address: 'Ben Yehuda 236, Tel Aviv',
        directions: 'Ben Yehuda 236, Tel Aviv-Yafo'
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
      title: 'Studio Experience',
      intro: 'Step into a world of theatrical magic and create unforgettable memories in our professional costume studio',
      experience: {
        title: 'A Unique Experience',
        desc: 'More than just a photo session - immerse yourself in the rich history of theatrical costumes and create magical moments in our professional studio.',
        highlights: [
          {
            title: 'Professional Costume Fitting',
            desc: 'Our expert dressers will help you select and fit the perfect costume for your theme'
          },
          {
            title: 'Rich Cultural History',
            desc: 'Discover the fascinating stories behind our collection as you explore decades of theatrical history'
          },
          {
            title: 'Professional Photography',
            desc: 'Capture stunning moments with professional lighting and expert photography in our studio'
          }
        ]
      },
      journey: {
        title: 'Your Studio Journey',
        steps: [
          {
            title: 'Welcome & History',
            desc: 'Begin with a fascinating tour of our collection and learn about our theatrical heritage'
          },
          {
            title: 'Costume Selection',
            desc: 'Choose from our extensive collection and get professionally fitted by our expert dressers'
          },
          {
            title: 'Professional Photo Session',
            desc: 'Create magical moments in our fully equipped studio with professional lighting'
          },
          {
            title: 'Take Home Memories',
            desc: 'Leave with professionally captured photos and unforgettable memories'
          }
        ]
      },
      gallery: {
        title: 'Studio Gallery'
      },
      booking: {
        title: 'Book Your Session',
        description: 'Contact us via WhatsApp or email to schedule your photo session. We\'ll help you plan the perfect shoot for your needs.',
        whatsappButton: 'Book via WhatsApp'
      },
      cta: {
        viewFullGallery: 'View Full Studio Gallery'
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
      successMessage: 'Thank you for your inquiry. We will get back to you soon.',
      errorMessage: 'Sorry, there was an error sending your message. Please try again.'
    }
  },
  he: {
    nav: {
      home: 'בית',
      about: 'הסיפור שלנו',
      gallery: 'גלריה',
      projects: 'פרויקטים',
      studio: 'סטודיו לצילום',
      visit: 'בקרו אותנו',
      contact: 'צור קשר',
      accessibility: 'נגישות'
    },
    home: {
      welcome: 'ברוכים הבאים ל-M-LEV תלבושות',
      mainHeading: 'החיים את החזון שלך עם תלבושות מושלמות',
      subHeading: 'גלו את האוסף הנרחב שלנו של תלבושות איכותיות לתיאטרון, קולנוע ואירועים.',
      cta: {
        viewProjects: 'צפו בפרויקטים',
        contact: 'צור קשר'
      },
      valueCards: [
        {
          title: 'דיוק היסטורי',
          text: 'התלבושות שלנו מחקרות ומעוצבות בקפידה כדי להבטיח אותנטיות תקופתית'
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
      title: 'הסיפור שלנו',
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
      title: 'בקרו אצלנו',
      intro: 'בקרו במחסן התלבושות שלנו בתל אביב.',
      schedule: {
        title: 'שעות פתיחה',
        weekdays: 'ראשון - חמישי',
        friday: 'שישי',
        saturday: 'שבת',
        hours: '9:00 - 16:00',
        fridayHours: 'סגור',
        saturdayClosed: 'סגור'
      },
      location: {
        title: 'מיקום',
        address: 'בן יהודה 236, תל אביב',
        directions: 'בן יהודה 236, תל אביב-יפו'
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
      title: 'סטודיו לצילום',
      intro: 'היכנסו לעולם הקסום של התיאטרון וצרו זכרונות בלתי נשכחים בסטודיו התלבושות המקצועי שלנו',
      experience: {
        title: 'חוויה ייחודית',
        desc: 'יותר מסתם צילומים - טבלו בהיסטוריה העשירה של תלבושות תיאטרון וצרו רגעים קסומים בסטודיו המקצועי שלנו',
        highlights: [
          {
            title: 'התאמת תלבושות מקצועית',
            desc: 'מלבישים מקצועיים יעזרו לכם לבחור ולהתאים את התלבושת המושלמת לנושא שבחרתם'
          },
          {
            title: 'היסטוריה תרבותית עשירה',
            desc: 'גלו את הסיפורים המרתקים מאחורי האוסף שלנו תוך כדי מסע בעשורים של היסטוריה תיאטרלית'
          },
          {
            title: 'צילום מקצועי',
            desc: 'הנציחו רגעים מרהיבים עם תאורה מקצועית וצילום מומחה בסטודיו שלנו'
          }
        ]
      },
      journey: {
        title: 'המסע שלכם בסטודיו',
        steps: [
          {
            title: 'קבלת פנים והיסטוריה',
            desc: 'התחילו בסיור מרתק באוסף שלנו ולמדו על המורשת התיאטרלית שלנו'
          },
          {
            title: 'בחירת תלבושת',
            desc: 'בחרו מתוך האוסף הנרחב שלנו וקבלו התאמה מקצועית ממלבישים מומחים'
          },
          {
            title: 'מפגש צילום מקצועי',
            desc: 'צרו רגעים קסומים בסטודיו המאובזר שלנו עם תאורה מקצועית'
          },
          {
            title: 'לקחת הביתה זכרונות',
            desc: 'עזבו עם תמונות שצולמו במקצועיות וזכרונות בלתי נשכחים'
          }
        ]
      },
      gallery: {
        title: 'גלריית הסטודיו'
      },
      booking: {
        title: 'הזמנת מפגש',
        description: 'צרו איתנו קשר דרך וואטסאפ או אימייל כדי לקבוע צילום. נעזור לכם לתכנן את הצילום המושלם עבורכם.',
        whatsappButton: 'הזמנה דרך וואטסאפ'
      },
      cta: {
        viewFullGallery: 'צפייה בגלריית הסטודיו המלאה'
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
