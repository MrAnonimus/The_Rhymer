var a;
var b;
var lr = 0;

    $(document).ready(function () {

        var words = new Array();
        var nwords = new Array();
        var rhymes = new Array();
        var frhymes = new Array();
        var output = new Array();
        var letters = 2;
        $(function () {
            $.get('/words.txt', function (data) {
                nwords = data.split('\n');
            });


        });
        for (i = 0; i < nwords.length; i++) {

            nwords[i] = nwords[i].split("  ");
        }


        $('#word').change(function () {
            $('#letters').children().remove();
            lr = 0;
            letters = 0;
            s = $(this).val();
            len = s.length;
            for (i = len; i > 0; i--) {
                $('#letters').append("<img class = 'trhyme' id=" + i + " src='i.png' alt='letters' />");
            }
            $('#letters').data('torhyme', len);
            $('#letters').css('width', (len * 30 + 20));

        })

        $('#letters').click(function () {
            //alert(parseInt($(this).data('torhyme')));
            if (parseInt($(this).data('torhyme')) > 0) {
                $('#letters  #' + lr).attr('src', 'o.png');
            }
            lr += 1;
            letters += 1;
        });
        $('#rhyme').click(function () {
            output[0] = [2];
            output = [];
            console.log(output[2]);
            var torhyme = document.getElementById('word').value;
            var lg = torhyme.length;
            var sbstr = torhyme.substr(lg - letters + 1);

            sbstr = sbstr.split("").reverse().join("");

            var z = sbstr[0];
            var bot;
            var up;

            switch (z) {
                case 'a':
                    bot = 0;
                    up = 24630;
                    break;
                case 'b':
                    bot = 24631;
                    up = 24753;
                    break;
                case 'c':
                    bot = 24754;
                    up = 25178;
                    break;
                case 'd':
                    bot = 25179;
                    up = 26081;
                    break;
                case 'e':
                    bot = 26082;
                    up = 55453;
                    break;
                case 'f':
                    bot = 55454;
                    up = 55689;
                    break;
                case 'g':
                    bot = 55690;
                    up = 56383;
                    break;
                case 'h':
                    bot = 56384;
                    up = 56954;
                    break;
                case 'i':
                    bot = 56955;
                    up = 85186;
                    break;
                case 'j':
                    bot = 85187;
                    up = 85269;
                    break;
                case 'k':
                    bot = 85270;
                    up = 85815;
                    break;
                case 'l':
                    bot = 85816;
                    up = 87048;
                    break;
                case 'm':
                    bot = 87049;
                    up = 87715;
                    break;
                case 'n':
                    bot = 87716;
                    up = 90420;
                    break;
                case 'o':
                    bot = 90421;
                    up = 122707;
                    break;
                case 'p':
                    bot = 122708;
                    up = 123017;
                    break;
                case 'q':
                    bot = 123018;
                    up = 123032;
                    break;
                case 'r':
                    bot = 123033;
                    up = 125269;
                    break;
                case 's':
                    bot = 125270;
                    up = 128102;
                    break;
                case 't':
                    bot = 128103;
                    up = 129741;
                    break;
                case 'u':
                    bot = 129742;
                    up = 130156;
                    break;
                case 'v':
                    bot = 130157;
                    up = 130417;
                    break;
                case 'w':
                    bot = 130418;
                    up = 130541;
                    break;
                case 'x':
                    bot = 130542;
                    up = 130764;
                    break;
                case 'y':
                    bot = 130765;
                    up = 131849;
                    break;
                case 'z':
                    bot = 131850;
                    up = 132107;
                    break;
                case 'à':
                    bot = 132108;
                    up = 134084;
                    break;
                case 'a':
                    bot = 134085;
                    up = 134091;
                    break;
                case 'è':
                    bot = 134092;
                    up = 134223;
                    break;
                case 'e':
                    bot = 134224;
                    up = 134439;
                    break;
                case 'ì':
                    bot = 134440;
                    up = 134690;
                    break;
                case 'i':
                    bot = 134691;
                    up = 134697;
                    break;
                case 'ò':
                    bot = 134698;
                    up = 136256;
                    break;
                case 'a':
                    bot = 136257;
                    up = 136264;
                    break;
                case 'ù':
                    bot = 136266;
                    up = 136348;
                    break;
                case 'a':
                    bot = 136349;
                    up = words.length - 1;
                    break;

            }
            words = nwords.slice(bot, (up + 1))

            for (i = 0; i < words.length; i++) {
                a = words[i].indexOf(sbstr);
                if (a == 0) {
                    c = words[i].substring(0, words[i].indexOf('  '));
                    f = parseInt(words[i].substring(words[i].indexOf('  ') + 2));
                    c = c.split("").reverse().join("");
                    d = [f, [c]];
                    rhymes.push(d);
                }
            }

            rhymes.sort(function (a, b) { return b[0] - a[0] });

            console.log(words.length);




            var groups = Math.round(rhymes.length / 50);

            for (z = 0; z < groups; z++) {
                if (z != groups) {
                    output[z] = rhymes.slice(z * 50, (z + 1) * 50);
                } else {
                    output[z] = rhymes.slice(z * 50);
                }
            }

            // Finally print each word in a table
            $('.result').children().remove();
            $('.result').css('opacity', 0);

            for (z = 0; z < 50; z++) {
                try {
                    var k = z % 10;

                    if (k == 0) {
                        $('.result').append("<tr>");
                        $('.result').append("<td><a target='blank' href='http://dizionari.corriere.it/dizionario_italiano/" + output[0][z][1][0].charAt(0) + "/" + output[0][z][1][0].toLowerCase() + ".shtml' >" + output[0][z][1][0] + "</a></td>");

                    } else if (k == 1) {
                        $('.result').append("<td><a target='blank' href='http://dizionari.corriere.it/dizionario_italiano/" + output[0][z][1][0].charAt(0) + "/" + output[0][z][1][0].toLowerCase() + ".shtml' >" + output[0][z][1][0] + "</a></td>");
                        $('.result').append("</tr>");

                    } else {

                        $('.result').append("<td><a target='blank' href='http://dizionari.corriere.it/dizionario_italiano/" + output[0][z][1][0].charAt(0) + "/" + output[0][z][1][0].toLowerCase() + ".shtml' >" + output[0][z][1][0] + "</a></td>");
                    }
                } catch (e) {
                    if (z == 0) {
                        $('.result').append("<td>No rhyming words found!</td>");
                        break;
                    } else {
                        break;
                    }
                }
            }
            $('.result').animate({ 'opacity': 1 }, 2000);



            rhymes = [];
            words = [];
        });


        $('.forward').click(function () {

        });

        $('.back').click(function () {

        });

    })
