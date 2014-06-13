(function(){
  var app = angular.module('people', []);

  app.controller('PeopleController', function(){
    this.persons = persons;
  });

  app.controller('TabController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  var persons = [
    {
      name: "Bob",
      homwTown: "London",
      age: 5,
      salary: 9.9998,
      employmentDate: '1368123412323',
      canLaugh: true,
      canCry: false,
      leftCompany: false,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
      images: [
        {
          full: 'http://lorempixel.com/g/300/300/business/1/',
          thumb: 'http://lorempixel.com/g/96/96/business/1/'
        },
        {
          full: 'http://lorempixel.com/g/300/300/business/2/',
          thumb: 'http://lorempixel.com/g/96/96/business/2/'
        }
      ]
    },
    {
      name: "Jim",
      homwTown: "New York",
      age: 15,
      salary: 19.9998,
      employmentDate: '1386523412323',
      canLaugh: true,
      canCry: true,
      leftCompany: true,
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere",
      images: [
        {
          full: 'http://lorempixel.com/g/300/300/business/4/',
          thumb: 'http://lorempixel.com/g/96/96/business/4/'
        }
      ]
    },
    {
      name: "Ron",
      homwTown: "Hong Kong",
      age: 5,
      salary: 12.9998,
      employmentDate: '1138123412323',
      canLaugh: true,
      canCry: true,
      leftCompany: false,
      description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.",
      images: [
        {
          full: 'http://lorempixel.com/g/300/300/business/7/',
          thumb: 'http://lorempixel.com/g/96/96/business/7/'
        },
        {
          full: 'http://lorempixel.com/g/300/300/business/8/',
          thumb: 'http://lorempixel.com/g/96/96/business/8/'
        },
        {
          full: 'http://lorempixel.com/g/300/300/business/9/',
          thumb: 'http://lorempixel.com/g/96/96/business/9/'
        }
      ]
    },
    {
      name: "Ted",
      homwTown: "Rio",
      age: 5,
      salary: 7.9998,
      employmentDate: '1388123212323',
      canLaugh: true,
      canCry: false,
      leftCompany: false,
      description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
      images: [
        {
          full: 'http://lorempixel.com/g/300/300/business/10/',
          thumb: 'http://lorempixel.com/g/96/96/business/10/'
        },
        {
          full: 'http://lorempixel.com/g/300/300/business/5/',
          thumb: 'http://lorempixel.com/g/96/96/business/5/'
        },
        {
          full: 'http://lorempixel.com/g/300/300/business/6/',
          thumb: 'http://lorempixel.com/g/96/96/business/6/'
        },
        {
          full: 'http://lorempixel.com/g/300/300/business/3/',
          thumb: 'http://lorempixel.com/g/96/96/business/3/'
        }
      ]
    },
  ];

})();
