﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proba11
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т ч регист анкеты.
    /// </summary>
    // *** Start programmer edit section *** (ТЧРегистАнкеты CustomAttributes)

    // *** End programmer edit section *** (ТЧРегистАнкеты CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч регист анкеты")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧРегистАнкетыE", new string[] {
            "ФИОКандидата as \'Ф и о кандидата\'",
            "СерНомПаспорта as \'Сер ном паспорта\'",
            "ИНН as \'ИНН\'",
            "Снилс as \'Снилс\'",
            "НомерТелефона as \'Номер телефона\'",
            "ЭлПочта as \'Эл почта\'",
            "Должности as \'Должности\'",
            "Должности.Должности as \'Должности\'"}, Hidden=new string[] {
            "Должности.Должности"})]
    [MasterViewDefineAttribute("ТЧРегистАнкетыE", "Должности", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Должности")]
    public class ТЧРегистАнкеты : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИОКандидата;
        
        private int fСерНомПаспорта;
        
        private int fИНН;
        
        private int fСнилс;
        
        private int fНомерТелефона;
        
        private string fЭлПочта;
        
        private IIS.Proba11.Должности fДолжности;
        
        private IIS.Proba11.РегистАнкеты fРегистАнкеты;
        
        // *** Start programmer edit section *** (ТЧРегистАнкеты CustomMembers)

        // *** End programmer edit section *** (ТЧРегистАнкеты CustomMembers)

        
        /// <summary>
        /// ИНН.
        /// </summary>
        // *** Start programmer edit section *** (ТЧРегистАнкеты.ИНН CustomAttributes)

        // *** End programmer edit section *** (ТЧРегистАнкеты.ИНН CustomAttributes)
        public virtual int ИНН
        {
            get
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.ИНН Get start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.ИНН Get start)
                int result = this.fИНН;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.ИНН Get end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.ИНН Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.ИНН Set start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.ИНН Set start)
                this.fИНН = value;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.ИНН Set end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.ИНН Set end)
            }
        }
        
        /// <summary>
        /// НомерТелефона.
        /// </summary>
        // *** Start programmer edit section *** (ТЧРегистАнкеты.НомерТелефона CustomAttributes)

        // *** End programmer edit section *** (ТЧРегистАнкеты.НомерТелефона CustomAttributes)
        public virtual int НомерТелефона
        {
            get
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.НомерТелефона Get start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.НомерТелефона Get start)
                int result = this.fНомерТелефона;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.НомерТелефона Get end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.НомерТелефона Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.НомерТелефона Set start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.НомерТелефона Set start)
                this.fНомерТелефона = value;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.НомерТелефона Set end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.НомерТелефона Set end)
            }
        }
        
        /// <summary>
        /// СерНомПаспорта.
        /// </summary>
        // *** Start programmer edit section *** (ТЧРегистАнкеты.СерНомПаспорта CustomAttributes)

        // *** End programmer edit section *** (ТЧРегистАнкеты.СерНомПаспорта CustomAttributes)
        public virtual int СерНомПаспорта
        {
            get
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.СерНомПаспорта Get start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.СерНомПаспорта Get start)
                int result = this.fСерНомПаспорта;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.СерНомПаспорта Get end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.СерНомПаспорта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.СерНомПаспорта Set start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.СерНомПаспорта Set start)
                this.fСерНомПаспорта = value;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.СерНомПаспорта Set end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.СерНомПаспорта Set end)
            }
        }
        
        /// <summary>
        /// Снилс.
        /// </summary>
        // *** Start programmer edit section *** (ТЧРегистАнкеты.Снилс CustomAttributes)

        // *** End programmer edit section *** (ТЧРегистАнкеты.Снилс CustomAttributes)
        public virtual int Снилс
        {
            get
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.Снилс Get start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.Снилс Get start)
                int result = this.fСнилс;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.Снилс Get end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.Снилс Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.Снилс Set start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.Снилс Set start)
                this.fСнилс = value;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.Снилс Set end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.Снилс Set end)
            }
        }
        
        /// <summary>
        /// ФИОКандидата.
        /// </summary>
        // *** Start programmer edit section *** (ТЧРегистАнкеты.ФИОКандидата CustomAttributes)

        // *** End programmer edit section *** (ТЧРегистАнкеты.ФИОКандидата CustomAttributes)
        [StrLen(255)]
        public virtual string ФИОКандидата
        {
            get
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.ФИОКандидата Get start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.ФИОКандидата Get start)
                string result = this.fФИОКандидата;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.ФИОКандидата Get end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.ФИОКандидата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.ФИОКандидата Set start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.ФИОКандидата Set start)
                this.fФИОКандидата = value;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.ФИОКандидата Set end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.ФИОКандидата Set end)
            }
        }
        
        /// <summary>
        /// ЭлПочта.
        /// </summary>
        // *** Start programmer edit section *** (ТЧРегистАнкеты.ЭлПочта CustomAttributes)

        // *** End programmer edit section *** (ТЧРегистАнкеты.ЭлПочта CustomAttributes)
        [StrLen(255)]
        public virtual string ЭлПочта
        {
            get
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.ЭлПочта Get start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.ЭлПочта Get start)
                string result = this.fЭлПочта;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.ЭлПочта Get end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.ЭлПочта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.ЭлПочта Set start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.ЭлПочта Set start)
                this.fЭлПочта = value;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.ЭлПочта Set end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.ЭлПочта Set end)
            }
        }
        
        /// <summary>
        /// Т ч регист анкеты.
        /// </summary>
        // *** Start programmer edit section *** (ТЧРегистАнкеты.Должности CustomAttributes)

        // *** End programmer edit section *** (ТЧРегистАнкеты.Должности CustomAttributes)
        [PropertyStorage(new string[] {
                "Должности"})]
        [NotNull()]
        public virtual IIS.Proba11.Должности Должности
        {
            get
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.Должности Get start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.Должности Get start)
                IIS.Proba11.Должности result = this.fДолжности;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.Должности Get end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.Должности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.Должности Set start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.Должности Set start)
                this.fДолжности = value;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.Должности Set end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.Должности Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Proba11.РегистАнкеты.
        /// </summary>
        // *** Start programmer edit section *** (ТЧРегистАнкеты.РегистАнкеты CustomAttributes)

        // *** End programmer edit section *** (ТЧРегистАнкеты.РегистАнкеты CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "РегистАнкеты"})]
        public virtual IIS.Proba11.РегистАнкеты РегистАнкеты
        {
            get
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.РегистАнкеты Get start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.РегистАнкеты Get start)
                IIS.Proba11.РегистАнкеты result = this.fРегистАнкеты;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.РегистАнкеты Get end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.РегистАнкеты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧРегистАнкеты.РегистАнкеты Set start)

                // *** End programmer edit section *** (ТЧРегистАнкеты.РегистАнкеты Set start)
                this.fРегистАнкеты = value;
                // *** Start programmer edit section *** (ТЧРегистАнкеты.РегистАнкеты Set end)

                // *** End programmer edit section *** (ТЧРегистАнкеты.РегистАнкеты Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧРегистАнкетыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧРегистАнкетыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧРегистАнкетыE", typeof(IIS.Proba11.ТЧРегистАнкеты));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧРегистАнкеты.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧРегистАнкеты CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧРегистАнкеты CustomAttributes)
    public class DetailArrayOfТЧРегистАнкеты : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Proba11.DetailArrayOfТЧРегистАнкеты members)

        // *** End programmer edit section *** (IIS.Proba11.DetailArrayOfТЧРегистАнкеты members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧРегистАнкеты by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧРегистАнкеты.
        /// </summary>
        public DetailArrayOfТЧРегистАнкеты(IIS.Proba11.РегистАнкеты fРегистАнкеты) : 
                base(typeof(ТЧРегистАнкеты), ((ICSSoft.STORMNET.DataObject)(fРегистАнкеты)))
        {
        }
        
        public IIS.Proba11.ТЧРегистАнкеты this[int index]
        {
            get
            {
                return ((IIS.Proba11.ТЧРегистАнкеты)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Proba11.ТЧРегистАнкеты dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
