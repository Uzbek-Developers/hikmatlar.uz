# Hikmatlar loyihasiga hissa qo'shish


Hikmatlar loyihasigaga o'z hissangizni qo'shishingizni va uni bugungi kundagidan ham yaxshiroq qilishga yordam berishingizni istardik!
Contributorlik uchun quyidagilarga amal qilishni so'raymiz:

 - [Question or Problem?](#question)
 - [Issues and Bugs](#issue)
 - [Feature Requests](#feature)
 - [Submission Guidelines](#submit)
 - [Commit Message Format](#commit)

## <a name="question"></a> Savol yoki muammo bormi?

Savolingizni berishning bir necha yo'li mavjud:

* Savolingizni pochta orqali mana.buyuklar@gmail.com manziliga yuboring

## <a name="issue"></a> Xavfsizlikda zaiflik topdingizmi?

Agar siz xavfsizlik zaifligini yoki shaxsan muhokama qilinishi kerak bo'lgan narsani topsangiz. Iltimos, biz bilan bog'laning mana.buyuklar@gmail.com

## <a name="issue"></a> Xato topdingizmi?

Agar manba kodida xato topsangiz, bizga yordam berishingiz mumkin buning uchun bizning [GitHub Repository](https://github.com/Uzbek-Developers/hikmatlar.uz)ga [issue yuboring](#submit-issue) yoki [Pull Request](#submit-pr) muammoni bartaraf etib yuborishingiz ham mumkin.

## <a name="feature"></a> Imkoniyat yetishmayapti 

Siz yangi imkoniyatni so'rashingiz yoki taklif berishingiz mumkin buning uchun  Repositoryga [issue yuboring](#submit-issue). Agar siz yangi funksionalni tadbiq (*implement*) qilmoqchi bo'lsangiz, [muammoni yuboring](#submit-issue) birinchi navbatda sizning taklifingizni ko'rib chiqib biz undan foydalanishimiz mumkinligiga ishonch hosil qilishimiz kerak.

Iltimos, bu qanday o'zgarish ekanligini ko'rib chiqing:

* **Asosiy xususiyat** uchun, avvalo, masalani oching [masalani oching](#submit-issue) va taklifingizni belgilang siz bergan taklif muhokama qilinadi. Bu bizga sa'y-harakatlarimizni yaxshiroq muvofiqlashtirishga, ishlarni takrorlashning oldini olishga va loyihaga muvaffaqiyatli qabul qilinishi uchun o'zgartirishni amalga oshirishga yordam beradi.

* **Kichik xususiyatlar** to'g'ridan-to'g'ri ishlab chiqilishi mumkin. Buning uchun [Pull Request yuboring](#submit-pr).

## <a name="submit"></a>   Taqdim etish boʻyicha koʻrsatmalar (*Submission Guidelines*)

### <a name="submit-issue"></a> Muammoni yuborish (*Submitting an Issue*)

Muammoni yuborishda oldin mavjud bo'lgan muammolar ro'yxatidan tekshirib qarab ko'ring. Siz yubormoqchi bo'lgan muamo ro'yxatda bo'lishi mumkin.

Biz barcha muammolarni imkon qadar tezroq bartaraf etishni xoxlaymiz, lekin xatoni tuzatishdan oldin uni qayta ishlab chiqarishimiz va tasdiqlashimiz kerak.
Xatoliklarni tuzatish uchun sizdan muammoni batafsilroq tushuntirishni so'raymiz.

[Ushbu formani](https://github.com/Uzbek-Developers/hikmatlar.uz/issues/new) to'ldirib siz muammo yoki xatolikni yozishingiz mumkin.

### <a name="submit-pr"></a> Pull Request yuborish *Submitting a Pull Request* (PR)

Pull Request (PR) yuborishdan oldin quyidagi yo'riqnomaga amal qiling:

* [Pull requests](https://github.com/Uzbek-Developers/hikmatlar.uz/pulls) bo'limidan tekshirib ko'ring. Siz yubormoqchi bo'lgan PR mavjud bo'lish mumkin.

* Barcha o'zgarishlaringizni yangi git branchda qiling

     ```shell
     git checkout -b my-fix-branch main
     ```

* Sizning pull requestingizga tegishli **test holatlarni** o'z ichiga olishi kerak testlarsiz siz yuborgan PR qabul qilinmaydi.

* Qilgan o'zgarishlaringizni aniq tavsiflovchi xabarlardan foydalaning bizning [xabar konventsiyalarini bajarish](#commit) qoidalarimizga ergashing.
Ushbu konventsiyalarga rioya qilish zarur, chunki relizlar ushbu xabarlardan avtomatik ravishda yaratiladi.

     ```shell
     git commit -a
     ```

Eslatma: ixtiyoriy commit -a buyruq qatori opsiyasi tahrirlangan fayllarni avtomatik ravishda qo'shadi *add* va o'chiradi *rm* qiladi.

* Push your branch to GitHub:

    ```shell
    git push origin my-branch
    ```

* Githubda `hikmatlar.uz:main` ga pull request PR yuboring.
* Agar biz o'zgarishlarni taklif qilsak
  * Kerakli yangilanishlarni amalga oshiring
  * Qaytadan testlarni ishlatib ko'ring barchasi muvaffaqiyatli o'tishi kerak.
  * Filialingizni qayta asoslang *rebase* va GitHub omboringizga o'tishga majbur qiling *force push* (bu sizning Pull Requestingizni yangilaydi):

    ```shell
    git rebase main -i
    git push -f
    ```

Bo'ldi shu! Hissangiz uchun rahmat!

## Pull Request asosiy branchga qo'shilgandan so'ng

Siz yuborgan PR `main` branchga qo'shilganidan keyin PR uchun yaratilgan branchni Githubdan o'chirib yuborishingiz kerak.

* Github dan remote branchni o'chirib yuborish uchun quyidagilarga amal qiling:

    ```shell
    git push origin --delete my-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```
