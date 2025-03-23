import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

const IntroHome11 = () => {
  return (
    <div>
        <div>
          <div className="flex justify-center">
            <h1 className="text-[35px] mt-[100px] w-[456px] font-semibold text-center text-[#282739]">ОТВЕЧАЕМ НА ВОПРОСЫ ПОКУПАТЕЛЕЙ</h1>
          </div>
          <div className="px-[350px] mt-[60px] text-[#282739]">
            <Accordion>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <Typography component="span">Есть ли гарантия того, что придет именно то, что было заказано? А если я оплачу и товар не придет?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Да, у нас имеются отзывы и мы гарантируем о безопасности и правильности заказа
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <Typography component="span">В Steam все  дешевле. Почему?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Незнаем с чего вы вдруг так решили но у нашего сервиса самые дешевые скины снг
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <Typography component="span">Как осуществляется сервисное обслуживание ? Где гарантия, что меня обслужат?</Typography>
              </AccordionSummary>
              <AccordionDetails>
             В каждой точке мира сервисное обслуживание одинаково , мы даем 100% гарантию что обслужим каждого покупателя   
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <Typography component="span">Имеются ли какие то бонусы при покупке?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Конечно мы выдаем бонусы в виде 3% кэшбэка при 2-ой покупке у нашего магазина
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
    </div>
  )
}

export default IntroHome11