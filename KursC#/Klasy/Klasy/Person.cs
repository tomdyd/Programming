using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Klasy
{
    public class Person
    {
        #region Pola
        private string? _firstName;
        private string? _lastName;
        private DateTime _dateOfBirth;
        private string _contactNumber;

        public static int Count = 0;
        #endregion

        #region Wlasciwosci
        // To podejscie stosujemy kiedy potrzebujemy dodatkowej logiki, np walidujacej input
        public string ContactNumber
        {  
            get { return _contactNumber; }
            set
            {
                if (value.Length < 9)
                {
                    Console.WriteLine("Invalid contact number"); ;
                }
                else
                {
                    _contactNumber = value;
                }
            }
        }

        // To podejscie stosujemy gdy nie ma zadnej dodatkowej logiki
        public string Address{ get; set; }

        #endregion

        #region Konstruktory
        public Person() { }
        public Person(string firstName, string lastName)
        {
            _firstName = firstName;
            _lastName = lastName;
            Count++;
            Console.WriteLine("Constrcutor 1");
        }

        // Dziedziczenie po konstruktorze
        public Person(DateTime dateOfBirth, string firstName, string lastName) : this ( firstName, lastName )
        {
            SetDateOfBirth(dateOfBirth);
            Console.WriteLine("Constrcutor 2");
        }
        #endregion 

        #region Metody
        public void SetDateOfBirth(DateTime date)
        {
            if (date > DateTime.Now) 
            {
                Console.WriteLine("Invalid date of birth");
            }
            else
            {
                _dateOfBirth = date;
            }
        }
        public void SetFirstName(string firstName)
        {
            if (string.IsNullOrEmpty(firstName))
            {
                Console.WriteLine("Invalid first name");
            }
            else
            {
                _firstName = firstName;
            }
        }
        public void SetLastName(string lastName)
        {
            if (string.IsNullOrEmpty(lastName))
            {
                Console.WriteLine("Invalid last name");
            }
            else
            {
                _lastName = lastName;
            }
        }

        // Dla getterów można skrócić zapis, zamiast return _zmienna
        public DateTime GetDateOfBirth() => _dateOfBirth; 
        public string GetFirstName() => _firstName;
        public string GetLastName() => _lastName;

        public void SayHi()
        {
            Console.WriteLine($"Hi I'm {_firstName} {_lastName} {GetDateOfBirth()} {ContactNumber}");
        }
        #endregion

    }
}
