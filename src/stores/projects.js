import { defineStore } from 'pinia'

// let ongoingDate = new Date().getUTCFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate();

export const useProjectStore = defineStore('projects', {
  state: () => {
    return {
      projects: [
        {
          name: 'Gerocare',
          subtitle: 'Give your Parents the gift of a Healthy, Long Life.',
          content: `Gerocare provides regular physician home visits for the elderly to prevent deterioration in their health condition, maintain a healthy state and improve quality of life.`,
          job_title: 'Full Stack Developer',
          duties: [
            'Migrated all company applications to GCP for a single server infrastructure which lead to a 35% increase in service delivery.',
            'Managed the tech team in maintaining existing systems and building new products for the organization.',
            'Implemented RESTful API for both internal and external client-facing consumption, including collaborations with the Lagos State Government to build efficient systems for the health sector of the state.',
            'Participated in code reviews, architecting, designing, and developing the products.'
          ],
          website: 'https://gerocare.org/',
          image: 'gerocare',
          completed_at: '2023-04-30',
          collaborated: true,
          tools: ['laravel', 'vuejs', 'GCP'],
          is_live: true,
          is_staging: false
        },
        {
          name: 'KSBTech',
          subtitle: 'Buy and sell giftcards and crypto at the best rates.',
          content: `KSBTECH takes pride in being Nigeria's most trusted platform for trading cryptocurrencies and digital assets.`,
          job_title: 'Backend Engineer',
          duties: [
            'Worked closely with Product and Design teams to understand the client requirements.',
            'Implemented RESTful API for the frontend web and mobile applications.',
            'Provisioned and maintained the database using MySQL, and the linux server on DigitalOcean.'
          ],
          website: 'https://ksbtech.com.ng/',
          image: 'ksbtech',
          completed_at: '2023-05-01',
          collaborated: true,
          tools: ['laravel', 'digitalocean'],
          is_live: true,
          is_staging: false
        },
        {
          name: 'Hypetag',
          subtitle: "Shopping that delivers where and when it's needed",
          content: `Hypetag provides a secure, easy-to-use technology that puts your shopping experience in your hands`,
          job_title: 'Backend Engineer',
          duties: [
            'Worked closely with Product and Design teams to understand the client requirements.',
            'Implemented RESTful API for the frontend web and mobile applications.',
            'Provisioned and maintained the database using MySQL, and the linux server on DigitalOcean.'
          ],
          website: 'https://hypetag.com/',
          image: 'hypetag',
          completed_at: '2023-05-23',
          collaborated: true,
          tools: ['laravel', 'digitalocean'],
          is_live: false,
          is_staging: false
        },
        {
          name: 'OurSpace',
          subtitle: 'Find any business-related information easily',
          content: `OurSpace is a real-estate platform purposed to elevate hospitality and help leisure seekers find the best apartments they can call home.
						Land owners (landlords) can list their very best short-stay spaces (apartments).`,
          job_title: 'Full Stack Engineer',
          duties: [
            'Worked closely with Product and Design teams to understand the client requirements.',
            `Implemented the backend architecture using Laravel and designed the administrative portal
						(<a href="#" target="_blank">https://admin.ourspace.ng/</a>) using Vuejs.`,
            'Implemented RESTful API for the frontend web and mobile applications.',
            'Provisioned and maintained the database using MySQL, and the linux server on DigitalOcean.'
          ],
          website: 'https://ourspace.ng/',
          image: 'ourspace',
          completed_at: '2022-04-01',
          collaborated: true,
          tools: ['laravel', 'digitalocean', 'vuejs'],
          is_live: false,
          is_staging: false
        },
        {
          name: 'Connect Nigeria',
          subtitle: 'Find any business-related information easily',
          content: `Connect Nigeria offers swift and simple access to a wide range of information about businesses,
						real estate, automobiles, jobs, events, travel, sports, entertainment, health, education, technology, and much more.`,
          job_title: 'Backend Engineer',
          duties: [
            `Collaborated in building and maintaining many backend services using Laravel, high-performant
						search tools (Meilisearch and Algolia), AWS ElastiCache (Redis), AWS S3, AWS EC2, AWS RDS, GitLab integrations.`,
            'Implemented RESTful API for both internal and external client-facing consumption.',
            'Participated in code reviews, architecting, designing, and developing the products.'
          ],
          website: 'https://connectnigeria.com/',
          image: 'connectnigeria',
          completed_at: '2022-09-30',
          collaborated: true,
          tools: ['laravel', 'aws', 'meilisearch'],
          is_live: true,
          is_staging: false
        },
        {
          name: 'PAYALAT',
          subtitle: 'Send & Receive Payments',
          content: `PAYALAT is a modern payment platform that support African Businesses to Accept Payments
						offline and online via, Cards, Bank accounts, Mobile Wallets, USSD, MasterPass QR, VISA QR,
						agent network and other alternative payment methods.`,
          job_title: 'Full Stack Developer',
          duties: [
            'Worked directly with the Project Lead to deliver high-end solutions to the web platform using Symfony (PHP framework).',
            'Implemented some magic functionalities from the Laravel framework into the project for ease of use.',
            'Refactored all service classes to suit the SOLID system design principles.'
          ],
          website: 'https://payalat.com/',
          image: 'payalat',
          completed_at: '2021-07-31',
          collaborated: true,
          tools: ['symfony', 'aws'],
          is_live: false,
          is_staging: false
        },
        {
          name: 'ACOMART',
          subtitle: 'The Africa Content Marketplace',
          content: `ACOMART is a platform dedicated to the global equitable promotion and acceleration of Afrocentric content.
						As the <b>Lead Software Engineer</b>, I coordinated all development tasks for the successful
						deployment of the applications.`,
          job_title: 'Lead Software Engineer',
          duties: [
            'Led the development team to build all company applications for Afrocentric Content.',
            'Participated in code reviews, architected, designed, and developed all product features.',
            'Collaborated in building and maintaining many backend services using Laravel, Masv.io, AWS Lambda, S3, SQS, MediaConvert, SNS, and Video.js.',
            'Implemented RESTful API for both internal and external client-facing consumption, including integrations with telecommunication and internet service providers in Ghana, Kenya and Nigeria.'
          ],
          website: 'https://acomart.tv/',
          image: 'acomart',
          completed_at: '2022-03-31',
          collaborated: true,
          tools: ['laravel', 'vuejs', 'aws'],
          is_live: false,
          is_staging: false
        },
        {
          name: 'Afrostream',
          subtitle: 'Catch-up with the latest African films',
          content: `AFROSTREAM is a subscription Video-on-Demand service for Afrocentric content to be launched globally.
						You can watch African films online. Also the <b>Lead Software Engineer</b>, I coordinated all
						affairs of the development of the applications.`,
          job_title: 'Lead Software Engineer',
          duties: [
            'Led the development team to build the web and mobile applications.',
            'Participated in code reviews, architected, designed, and developed all product features.',
            'Collaborated in building and maintaining many backend services using Laravel, Vuejs, AWS CloudFront, S3, SQS, MediaConvert, SNS, and Video.js.'
          ],
          website: 'https://myafrostream.tv/',
          image: 'myafrostream',
          completed_at: '2022-03-31',
          collaborated: true,
          tools: ['laravel', 'vuejs', 'aws'],
          is_live: false,
          is_staging: false
        },
        {
          name: 'Afrocinema',
          subtitle: 'Access to premium and high quality Afrocentric movies and series.',
          content: `AFROCINEMA is the digital Cinema for Afrocentric Movies and Premium Series via
						your Mobile, PC or Smart TV. Also the <b>Lead Software Engineer</b>, I coordinated all
						affairs of the development of the applications.`,
          job_title: 'Lead Software Engineer',
          duties: [
            'Led the development team to build the web and mobile applications.',
            'Participated in code reviews, architected, designed, and developed all product features.',
            'Collaborated in building and maintaining many backend services using Laravel, Vuejs, AWS CloudFront, S3, SQS, MediaConvert, SNS, and Video.js.'
          ],
          website: 'https://afrocinema.tv/',
          image: 'afrocinema',
          completed_at: '2022-03-31',
          collaborated: true,
          tools: ['laravel', 'vuejs', 'aws'],
          is_live: false,
          is_staging: false
        },
        {
          name: 'AETI Online Training',
          subtitle: 'Online Training Platform',
          content: `AETI ONLINE TRAINING is an online training platform which features programmes
						to bridge the learning gaps with engineering services and skills acquisition of mid-career professionals.
						Acted as the <b>Lead Software Developer</b>.`,
          job_title: 'Full Stack Engineer',
          duties: [
            'Worked directly with the Project Lead to deliver high-end solutions to the web platform.',
            'Designed and developed the web application using Vuejs and Laravel.',
            'Provisioned and maintained the database using MySQL.'
          ],
          website: 'http://onlinetraining.aetinigeria.com/',
          image: 'aeti',
          completed_at: '2020-09-18',
          collaborated: true,
          tools: ['laravel', 'vuejs', 'vuetify', 'cPanel'],
          is_live: true,
          is_staging: false
        },
        {
          name: 'SavyCon',
          subtitle: 'Hire a vendor for your project',
          content: `SAVYCON is a reliable outsourcing platform with ads features tailored to redefining
						outsourcing in the best way clients and freelancers appreciate. Following strict instructions,
						the application was developed and delivered at the estimated time.`,
          job_title: 'Full Stack Developer',
          duties: [
            'Worked directly with the Project Lead to deliver high-end solutions to the web platform.',
            'Designed and developed the web application using Vuejs and Laravel.',
            'Provisioned and maintained the database using MySQL.'
          ],
          website: 'http://savycon.com/',
          image: 'savycon',
          completed_at: '2019-09-24',
          collaborated: false,
          tools: ['laravel', 'vuejs', 'vultr'],
          is_live: true,
          is_staging: false
        },
        {
          name: 'NextLaw Africa',
          subtitle: 'Enabling Legal Practitioners in Africa through Technology',
          content: `NEXTLAW AFRICA is a legal platform for practitioners across Africa, providing legal services to
						businesses and practitioners. Project is currently onhold, as new developments are ongoing in the
						background. #Anticipate`,
          job_title: 'Full Stack Developer',
          duties: [
            'Led the Applications Development team of 3 developers in Nigeria.',
            "Implemented a microservice application for user subscriptions management for their use in the Legal practitioners' and mobile research applications.",
            'Started the design and development of an all-in-one web application for legal practitioners to manage cases, contracts and files.'
          ],
          website: 'https://nextlaw.africa/',
          image: 'nextlaw',
          completed_at: '2019-07-02',
          collaborated: true,
          tools: ['laravel', 'angularjs', 'aws'],
          is_live: false,
          is_staging: false
        },
        {
          name: 'Dream Builders International',
          subtitle: 'Real Estate Platform',
          content: `Dream Builders International is a real estate company that provides the best service when it
						comes to rentage, buying and selling of property online.`,
          job_title: 'Full Stack Engineer',
          duties: [
            'Worked directly with the Project Lead to deliver high-end solutions to the web platform.',
            'Designed and developed the web application using Vuejs and Laravel.',
            'Provisioned and maintained the database using MySQL.'
          ],
          website: null,
          image: 'dreambuildersinter',
          completed_at: '2019-05-14',
          collaborated: false,
          tools: ['laravel', 'cPanel', 'vuejs'],
          is_live: false,
          is_staging: false
        }
        // {
        // 	name: 'MartAdef Inc.',
        // 	subtitle: 'Sample Website',
        // 	content: 'This is one of the very first websites I designed actually, using Mobirise.',
        // 	website: 'http://martadefinc.000webhostapp.com/',
        // 	image: 'martadef',
        // 	completed_at: '2018-01-01',
        // 	collaborated: false
        // }
      ]
    }
  },
  getters: {
    getProjects() {
      return this.projects.sort((a, b) => {
        // First, compare is_live (boolean)
        if (b.is_live - a.is_live !== 0) {
          return b.is_live - a.is_live
        }

        // If is_live is the same, then compare completed_at date
        const date1 = new Date(a.completed_at)
        const date2 = new Date(b.completed_at)

        return date2 - date1
      })
    },
    getLiveProjects() {
      return this.projects
        .filter((project) => project.is_live)
        .sort((a, b) => {
          const date1 = new Date(a.completed_at)
          const date2 = new Date(b.completed_at)

          return date2 - date1
        })
    },
    getStaleProjects() {
      return this.projects
        .filter((project) => !project.is_live)
        .sort((a, b) => {
          const date1 = new Date(a.completed_at)
          const date2 = new Date(b.completed_at)

          return date2 - date1
        })
    }
  }
})
