import './pages.css';

function RentTerms () {
    return ( 
        <div className='rent-terms'>
            <ul className='rent-terms-ul'>
                <li>Оборудование выдается по предварительному бронированию.</li>
                <li>Минимальный срок аренды оборудования 1 (одни) сутки.</li>
                <li>Для оформления договора аренды необходим паспорт гражданина РФ.</li>
                <li>В случае отсутствия постоянной регистрации в Москве или Московской области сумма залога может быть увеличена до полной стоимости оборудования (инструмента).</li>
                <li>Оборудование выдается под денежный залог. Денежный залог в каждом случае рассчитывается отдельно, но как правило, в размере 80% от стоимости нового оборудования.</li>
                <li>После возврата чистого и исправного оборудования Вы можете получить остаток залога.</li>
                <li>В случае продления срока аренды необходимо известить об этом до истечения срока аренды.</li>
                <li>В случае возврата грязного оборудования взимается штраф 500 рублей.</li>
                <li>В случае возврата неисправного оборудования по вине Арендатора, с Арендатора удерживается сумма необходимая для восстановления работоспособности оборудования или инструмента.</li>
                <li>В случае утраты оборудования Арендатор оплачивает полную стоимость оборудования или инструмента.</li>
            </ul>
            <h3 className='rent-terms-title'>Порядок получения оборудования в аренду</h3>
            <ol className='rent-terms-ol'>
                <li>Уточнить наличие и забронировать оборудование по телефону.</li>
                <li>Заранее договориться о встрече или обсудить условия доставки.</li>
                <li>Иметь при себе удостоверение личности (паспорт) и необходимую залоговую сумму.</li>
                <li>Убедиться в исправности и чистоте оборудования.</li>
                <li>Подписать договор аренды оборудования и внести залог.</li>
            </ol>

        </div>
     );
}

export default RentTerms ;