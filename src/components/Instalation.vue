<template>
    <div class="instalation">
        <input type="checkbox" class="instalation__checkbox">
        <img src="../assets/img_app/img-instalation.svg" alt="" class="instalation__image">
        <div class="instalation__text">
            <div class="text__title">Установка</div>
            <div class="text__subtitle">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных
                товаров.</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.instalation {
    background: #F6F8FA;
    border-radius: 5px;
    padding: 26px;
    display: flex;
    align-items: center;

    .instalation__checkbox {
        margin-right: 20px;
    }

    .instalation__image {
        margin-right: 20px;
    }

    .instalation__text {
        .text__title {
            font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 145%;
            color: #1F2432;
        }

        .text__subtitle {
            font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #797B86;
        }
    }
}
</style>