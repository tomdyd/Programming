using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectPerson
{
    internal class Person
    {


        private DateTime dateOfBirth;
        private string phoneNumber;
        private string userName;
        private string surname;

        static public int count = 0;
        public Person(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
            count++;
        }

        public Person(DateTime dateOfBirth, string phoneNumber, string firstName, string lastName) : this(firstName, lastName)
        {
            dateOfBirth = DateOfBirth;
            phoneNumber = PhoneNumber;

        }

        public string FirstName
        {
            get { return userName; }
            set
            {
                if (value == null || value == "")
                {
                    Console.WriteLine("Invalid username!");
                }
                else
                {
                    userName = value;
                }
            }
        }

        public string LastName
        {
            get { return surname; }
            set
            {
                if (value == null || value == "")
                {
                    Console.WriteLine("Invalid username!");
                }
                else
                {
                    surname = value;
                }
            }
        }
        public string PhoneNumber
        {
            get { return phoneNumber; }
            set
            {
                if (value == null || value.Length != 9)
                {
                    Console.WriteLine("Invalid phone number!");
                }
                else
                {
                    phoneNumber = value;
                }
            }
        }
        public DateTime DateOfBirth
        {
            get { return dateOfBirth; }
            
            set
            {
                if (value >= DateTime.Now)
                {
                    Console.WriteLine("Invalid date of birth");
                }
                else
                {
                    dateOfBirth = value;
                }
            }
        }

       




        //public void SetDateOfBirth(DateTime date)
        //{
        //    if (date > DateTime.Now)
        //    {
        //        Console.WriteLine("Invalid date of birth");
        //    }
        //    else
        //    {
        //        dateOfBirth = date;
        //    }
        //}

        //public DateTime GetDateOfBirth()
        //{
        //    return dateOfBirth;
        //}

        public void sayHi()
        {
            Console.WriteLine($"{FirstName} mówi cześć, urodziłem się {dateOfBirth}");
        }
    }
}
